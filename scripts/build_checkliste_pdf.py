#!/usr/bin/env python3
"""Build professionally styled PDF of CHECKLISTE-MARCO.md in Fit-mit-Marco brand."""

import re
from pathlib import Path

from reportlab.lib.colors import HexColor, Color
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm, mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Flowable,
    Frame,
    HRFlowable,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)

# ---- Brand ----
FOREST = HexColor("#1A3C34")
TEAL = HexColor("#00B894")
MINT = HexColor("#6FE7BD")
CREAM = HexColor("#F8F5F0")
CREAM_DEEP = HexColor("#F1EBE0")
INK = HexColor("#22312D")
MUTED = HexColor("#5A6B66")
LINE = HexColor("#D7CEBE")
RED = HexColor("#C8553D")
YELLOW = HexColor("#D9A441")
GREEN = HexColor("#4CA777")

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "CHECKLISTE-MARCO.md"
OUT = ROOT / "CHECKLISTE-MARCO.pdf"

# ---- Fonts: try system serif (Cormorant-like) + sans ----
def _try_register(name: str, path: str) -> bool:
    try:
        pdfmetrics.registerFont(TTFont(name, path))
        return True
    except Exception:
        return False


SERIF = "Times-Roman"
SERIF_B = "Times-Bold"
SERIF_I = "Times-Italic"
SERIF_BI = "Times-BoldItalic"

# Look for Cormorant in project fonts if exists
_font_candidates_serif = [
    ("Cormorant", "/Library/Fonts/Cormorant-Regular.ttf"),
    ("Cormorant", "/System/Library/Fonts/Supplemental/Georgia.ttf"),
]
for name, p in _font_candidates_serif:
    if Path(p).exists() and _try_register(name + "-reg", p):
        SERIF = name + "-reg"
        break

# Bold serif
for name, p in [
    ("CormorantB", "/Library/Fonts/Cormorant-Bold.ttf"),
    ("CormorantB", "/System/Library/Fonts/Supplemental/Georgia Bold.ttf"),
]:
    if Path(p).exists() and _try_register(name, p):
        SERIF_B = name
        break

for name, p in [
    ("CormorantI", "/System/Library/Fonts/Supplemental/Georgia Italic.ttf"),
]:
    if Path(p).exists() and _try_register(name, p):
        SERIF_I = name
        break

# Sans
SANS = "Helvetica"
SANS_B = "Helvetica-Bold"
SANS_I = "Helvetica-Oblique"

for name, p in [
    ("Outfit-R", "/Library/Fonts/Outfit-Regular.ttf"),
    ("System-R", "/System/Library/Fonts/Supplemental/Arial.ttf"),
]:
    if Path(p).exists() and _try_register(name, p):
        SANS = name
        break
for name, p in [
    ("Outfit-B", "/Library/Fonts/Outfit-Bold.ttf"),
    ("System-B", "/System/Library/Fonts/Supplemental/Arial Bold.ttf"),
]:
    if Path(p).exists() and _try_register(name, p):
        SANS_B = name
        break


# ---- Custom Flowables ----
class ColoredBackground(Flowable):
    """Draws a cream background over the entire page — used on canvas, not as flowable."""


class Checkbox(Flowable):
    """An empty rounded-square checkbox."""

    def __init__(self, size=10, checked=False):
        super().__init__()
        self.size = size
        self.checked = checked
        self.width = size
        self.height = size

    def draw(self):
        c = self.canv
        s = self.size
        c.setStrokeColor(FOREST)
        c.setLineWidth(1.1)
        if self.checked:
            c.setFillColor(TEAL)
            c.roundRect(0, 0, s, s, 1.5, stroke=1, fill=1)
            c.setStrokeColor(CREAM)
            c.setLineWidth(1.4)
            # draw a checkmark
            c.line(s * 0.22, s * 0.5, s * 0.42, s * 0.28)
            c.line(s * 0.42, s * 0.28, s * 0.78, s * 0.72)
        else:
            c.setFillColor(CREAM)
            c.roundRect(0, 0, s, s, 1.5, stroke=1, fill=1)


class PriorityChip(Flowable):
    def __init__(self, label, color, text_color=None, w=1.9 * cm, h=0.55 * cm):
        super().__init__()
        self.label = label
        self.color = color
        self.text_color = text_color or CREAM
        self.width = w
        self.height = h

    def draw(self):
        c = self.canv
        c.setFillColor(self.color)
        c.setStrokeColor(self.color)
        c.roundRect(0, 0, self.width, self.height, self.height / 2, stroke=0, fill=1)
        c.setFillColor(self.text_color)
        c.setFont(SANS_B, 7.5)
        tw = c.stringWidth(self.label, SANS_B, 7.5)
        c.drawString((self.width - tw) / 2, self.height / 2 - 2.6, self.label)


# ---- Styles ----
styles = getSampleStyleSheet()

H1 = ParagraphStyle(
    "H1", parent=styles["Heading1"],
    fontName=SERIF_B, fontSize=40, leading=44,
    textColor=FOREST, spaceBefore=0, spaceAfter=6, alignment=TA_LEFT,
)
H_KICKER = ParagraphStyle(
    "Kicker", parent=styles["Normal"],
    fontName=SANS_B, fontSize=8, leading=10,
    textColor=TEAL, spaceAfter=8, alignment=TA_LEFT,
)
LEAD = ParagraphStyle(
    "Lead", parent=styles["Normal"],
    fontName=SERIF_I, fontSize=12.5, leading=18,
    textColor=INK, spaceAfter=6, alignment=TA_LEFT,
)
BODY = ParagraphStyle(
    "Body", parent=styles["Normal"],
    fontName=SANS, fontSize=10, leading=15,
    textColor=INK, spaceAfter=4, alignment=TA_LEFT,
)
SMALL = ParagraphStyle(
    "Small", parent=BODY, fontSize=8.5, leading=12, textColor=MUTED,
)
H2 = ParagraphStyle(
    "H2", parent=styles["Heading2"],
    fontName=SERIF_B, fontSize=22, leading=26,
    textColor=FOREST, spaceBefore=14, spaceAfter=2,
)
H3 = ParagraphStyle(
    "H3", parent=styles["Heading3"],
    fontName=SANS_B, fontSize=11, leading=14,
    textColor=FOREST, spaceBefore=10, spaceAfter=3,
    letterSpace=0,
)
QUOTE = ParagraphStyle(
    "Quote", parent=BODY,
    fontName=SERIF_I, fontSize=10.5, leading=15,
    textColor=MUTED, leftIndent=10, spaceAfter=6,
)
CHECK_TEXT = ParagraphStyle(
    "Check", parent=BODY,
    fontName=SANS, fontSize=10, leading=14.5,
    textColor=INK, leftIndent=0, spaceAfter=2,
)
CHECK_TEXT_DONE = ParagraphStyle(
    "CheckDone", parent=CHECK_TEXT,
    textColor=MUTED,
)
SECTION_BADGE_TITLE = ParagraphStyle(
    "SectionTitle", parent=styles["Heading2"],
    fontName=SERIF_B, fontSize=20, leading=24,
    textColor=FOREST, spaceBefore=0, spaceAfter=0,
)


# ---- Parse markdown ----
def parse_md(text: str):
    """Return a list of blocks: dicts with 'type' and 'payload'."""
    lines = text.splitlines()
    blocks = []
    i = 0
    n = len(lines)

    while i < n:
        line = lines[i]
        stripped = line.strip()

        if not stripped:
            i += 1
            continue

        if stripped.startswith("# "):
            blocks.append({"type": "title", "text": stripped[2:].strip()})
            i += 1
            continue

        if stripped.startswith("## "):
            blocks.append({"type": "h2", "text": stripped[3:].strip()})
            i += 1
            continue

        if stripped.startswith("### "):
            blocks.append({"type": "h3", "text": stripped[4:].strip()})
            i += 1
            continue

        if stripped == "---":
            blocks.append({"type": "hr"})
            i += 1
            continue

        # checklist
        m_check = re.match(r"^\s*- \[( |x|X)\]\s*(.*)$", line)
        if m_check:
            checked = m_check.group(1).lower() == "x"
            content = m_check.group(2)
            # Gather continuation (indented lines)
            i += 1
            while i < n:
                nxt = lines[i]
                m_indent = re.match(r"^\s{2,}(?!- \[)(.*)$", nxt)
                if m_indent and nxt.strip():
                    # Could be continuation
                    i += 1
                    continue
                break
            blocks.append({"type": "check", "checked": checked, "text": content})
            continue

        # sub-checklist nested under checklist — treat as check too (our input has 2-space indented - [ ] under section 7)
        m_subcheck = re.match(r"^\s+- \[( |x|X)\]\s*(.*)$", line)
        if m_subcheck:
            checked = m_subcheck.group(1).lower() == "x"
            blocks.append({"type": "subcheck", "checked": checked, "text": m_subcheck.group(2)})
            i += 1
            continue

        # bullet
        m_bullet = re.match(r"^\s*- (.*)$", line)
        if m_bullet:
            blocks.append({"type": "bullet", "text": m_bullet.group(1)})
            i += 1
            continue

        # numbered
        m_num = re.match(r"^\s*(\d+)\.\s+(.*)$", line)
        if m_num:
            blocks.append({"type": "numbered", "num": m_num.group(1), "text": m_num.group(2)})
            i += 1
            continue

        # italic callout (entire line in *...*)
        if stripped.startswith("*") and stripped.endswith("*") and len(stripped) > 2:
            blocks.append({"type": "callout", "text": stripped[1:-1].strip()})
            i += 1
            continue

        # plain paragraph
        blocks.append({"type": "p", "text": stripped})
        i += 1

    return blocks


# ---- Inline markdown helpers ----
def inline_md(text: str) -> str:
    # Bold **x**
    text = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", text)
    # Italic *x*
    text = re.sub(r"(?<!\*)\*(?!\*)(.+?)\*(?!\*)", r"<i>\1</i>", text)
    # Inline code `x`
    text = re.sub(
        r"`([^`]+)`",
        r'<font name="Courier" color="#1A3C34" backColor="#F1EBE0">\1</font>',
        text,
    )
    # strike ~~x~~
    text = re.sub(r"~~(.+?)~~", r"<strike>\1</strike>", text)
    return text


# ---- Priority detection for section headings ----
PRIORITY_MAP = {
    "🔴": ("MUST-HAVE", RED),
    "🟡": ("WICHTIG", YELLOW),
    "🟢": ("NICE-TO-HAVE", GREEN),
}


def extract_priority(heading: str):
    for emoji, (label, color) in PRIORITY_MAP.items():
        if heading.startswith(emoji):
            rest = heading[len(emoji):].strip()
            return label, color, rest
    return None, None, heading


# ---- Section card ----
def section_card(title_raw: str, story_accumulator):
    label, color, clean_title = extract_priority(title_raw)
    # Strip emoji noise from title (e.g., 🔴 3. …)
    clean_title = re.sub(r"^[🔴🟡🟢]\s*", "", title_raw)

    items = []
    if label:
        chip = PriorityChip(label, color, CREAM)
        items.append(chip)
        items.append(Spacer(1, 4))
    items.append(Paragraph(inline_md(clean_title), SECTION_BADGE_TITLE))
    items.append(HRFlowable(width="15%", thickness=1.8, color=TEAL, spaceBefore=6, spaceAfter=0))
    return items


# ---- Page decorations ----
PAGE_W, PAGE_H = A4


def draw_background(canv, doc):
    canv.saveState()
    # Cream page background
    canv.setFillColor(CREAM)
    canv.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)

    # Left rail accent
    canv.setFillColor(FOREST)
    canv.rect(0, 0, 14 * mm, PAGE_H, stroke=0, fill=1)

    # Small teal square at top of rail
    canv.setFillColor(TEAL)
    canv.rect(0, PAGE_H - 30 * mm, 14 * mm, 16 * mm, stroke=0, fill=1)
    canv.setFillColor(CREAM)
    canv.setFont(SANS_B, 7)
    canv.saveState()
    canv.translate(7 * mm, PAGE_H - 22 * mm)
    canv.rotate(-90)
    canv.drawCentredString(0, -2, "FIT MIT MARCO")
    canv.restoreState()

    # Footer
    canv.setFillColor(MUTED)
    canv.setFont(SANS, 8)
    canv.drawString(22 * mm, 12 * mm, "Checkliste — Fit mit Marco · Personal Training für Senioren in München")
    canv.drawRightString(PAGE_W - 14 * mm, 12 * mm, f"Seite {doc.page}")
    # Thin teal rule above footer
    canv.setStrokeColor(LINE)
    canv.setLineWidth(0.5)
    canv.line(22 * mm, 16 * mm, PAGE_W - 14 * mm, 16 * mm)

    canv.restoreState()


def draw_cover(canv, doc):
    """Special cover background for page 1."""
    canv.saveState()
    # Full forest background for cover
    canv.setFillColor(FOREST)
    canv.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)

    # Geometric accent circles
    canv.setFillColor(HexColor("#235048"))
    canv.circle(PAGE_W + 40 * mm, PAGE_H - 60 * mm, 90 * mm, stroke=0, fill=1)
    canv.setFillColor(TEAL)
    canv.setFillAlpha(0.18)
    canv.circle(-20 * mm, 30 * mm, 80 * mm, stroke=0, fill=1)
    canv.setFillAlpha(1)

    # Left rail
    canv.setFillColor(TEAL)
    canv.rect(0, 0, 14 * mm, PAGE_H, stroke=0, fill=1)

    # Monogram in corner
    canv.setFillColor(CREAM)
    canv.setFont(SANS_B, 8)
    canv.drawString(22 * mm, PAGE_H - 22 * mm, "FIT MIT MARCO · CHECKLISTE")

    # Title block
    canv.setFillColor(CREAM)
    canv.setFont(SERIF_B, 56)
    canv.drawString(22 * mm, PAGE_H - 115 * mm, "Checkliste")
    canv.setFillColor(MINT)
    canv.setFont(SERIF_I, 44)
    canv.drawString(22 * mm, PAGE_H - 145 * mm, "für Marco")

    # Accent line
    canv.setStrokeColor(TEAL)
    canv.setLineWidth(2)
    canv.line(22 * mm, PAGE_H - 155 * mm, 60 * mm, PAGE_H - 155 * mm)

    # Subheading
    canv.setFillColor(CREAM)
    canv.setFont(SANS, 11)
    canv.drawString(22 * mm, PAGE_H - 168 * mm, "Was noch beantwortet werden muss,")
    canv.drawString(22 * mm, PAGE_H - 178 * mm, "bevor die Website live geht.")

    # Priority legend
    y = 60 * mm
    canv.setFont(SANS_B, 8)
    canv.setFillColor(MINT)
    canv.drawString(22 * mm, y + 20 * mm, "PRIORITÄTEN")

    def chip(x, y, label, color):
        w, h = 36 * mm, 7 * mm
        canv.setFillColor(color)
        canv.roundRect(x, y, w, h, h / 2, stroke=0, fill=1)
        canv.setFillColor(CREAM)
        canv.setFont(SANS_B, 8)
        canv.drawCentredString(x + w / 2, y + 2.2, label)

    chip(22 * mm, y + 10 * mm, "MUST-HAVE", RED)
    chip(22 * mm, y + 1 * mm, "WICHTIG", YELLOW)
    chip(22 * mm, y - 8 * mm, "NICE-TO-HAVE", GREEN)

    # Footer tagline
    canv.setFillColor(MINT)
    canv.setFont(SERIF_I, 11)
    canv.drawString(22 * mm, 20 * mm, "„Dein Körper ist stärker, als du glaubst.\u201C")
    canv.setFillColor(CREAM)
    canv.setFont(SANS, 7.5)
    canv.drawString(22 * mm, 12 * mm, "Stand April 2026 · fitmitmarco.com")

    canv.restoreState()


# ---- Doc build ----
def build():
    text = SRC.read_text(encoding="utf-8")
    blocks = parse_md(text)

    doc = BaseDocTemplate(
        str(OUT),
        pagesize=A4,
        leftMargin=22 * mm,
        rightMargin=14 * mm,
        topMargin=25 * mm,
        bottomMargin=22 * mm,
        title="Checkliste — Fit mit Marco",
        author="Fit mit Marco",
        subject="Was Marco noch beantworten muss",
    )

    content_frame = Frame(
        22 * mm, 20 * mm, PAGE_W - 22 * mm - 14 * mm, PAGE_H - 25 * mm - 20 * mm,
        id="content", showBoundary=0,
        leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0,
    )
    cover_frame = Frame(
        22 * mm, 20 * mm, PAGE_W - 22 * mm - 14 * mm, PAGE_H - 25 * mm - 20 * mm,
        id="cover", showBoundary=0,
    )

    doc.addPageTemplates([
        PageTemplate(id="cover", frames=[cover_frame], onPage=draw_cover),
        PageTemplate(id="main", frames=[content_frame], onPage=draw_background),
    ])

    story = []

    # Cover page — empty frame, all handled in draw_cover
    story.append(Spacer(1, 10 * mm))
    story.append(PageBreak())

    # Switch to main template
    from reportlab.platypus import NextPageTemplate
    story.insert(0, NextPageTemplate("cover"))
    story.append(NextPageTemplate("main"))

    # Intro
    first_title_done = False
    first_lead_done = False

    for idx, b in enumerate(blocks):
        t = b["type"]

        if t == "title":
            # skip — handled on cover
            continue

        if t == "hr":
            story.append(Spacer(1, 4))
            story.append(HRFlowable(width="100%", thickness=0.6, color=LINE, spaceBefore=2, spaceAfter=6))
            continue

        if t == "h2":
            story.append(Spacer(1, 10))
            story.extend(section_card(b["text"], story))
            story.append(Spacer(1, 6))
            continue

        if t == "h3":
            story.append(KeepTogether([
                Spacer(1, 4),
                Paragraph(inline_md(b["text"]).upper(), H3),
                HRFlowable(width="8%", thickness=1.2, color=TEAL, spaceBefore=2, spaceAfter=4),
            ]))
            continue

        if t == "callout":
            # quote-like italic note box
            para = Paragraph(inline_md(b["text"]), QUOTE)
            tbl = Table(
                [[para]],
                colWidths=[PAGE_W - 22 * mm - 14 * mm - 8],
            )
            tbl.setStyle(TableStyle([
                ("BACKGROUND", (0, 0), (-1, -1), CREAM_DEEP),
                ("LEFTPADDING", (0, 0), (-1, -1), 10),
                ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
                ("LINEBEFORE", (0, 0), (0, -1), 2, TEAL),
                ("ROUNDEDCORNERS", [3, 3, 3, 3]),
            ]))
            story.append(tbl)
            story.append(Spacer(1, 6))
            continue

        if t == "p":
            story.append(Paragraph(inline_md(b["text"]), BODY))
            continue

        if t == "bullet":
            story.append(Paragraph("• " + inline_md(b["text"]), BODY))
            continue

        if t == "numbered":
            num_para = Paragraph(
                f'<font color="#00B894"><b>{b["num"]}.</b></font>&nbsp;&nbsp;{inline_md(b["text"])}',
                BODY,
            )
            story.append(num_para)
            continue

        if t in ("check", "subcheck"):
            text_style = CHECK_TEXT_DONE if b["checked"] else CHECK_TEXT
            cb = Checkbox(size=10, checked=b["checked"])
            text_para = Paragraph(inline_md(b["text"]), text_style)
            indent = 12 if t == "subcheck" else 0
            row = Table(
                [[cb, text_para]],
                colWidths=[16, PAGE_W - 22 * mm - 14 * mm - 16 - indent],
            )
            row.setStyle(TableStyle([
                ("VALIGN", (0, 0), (0, 0), "TOP"),
                ("VALIGN", (1, 0), (1, 0), "TOP"),
                ("TOPPADDING", (0, 0), (-1, -1), 2),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
                ("LEFTPADDING", (0, 0), (0, 0), 0),
                ("RIGHTPADDING", (0, 0), (0, 0), 6),
            ]))
            if indent:
                wrap = Table([[row]], colWidths=[PAGE_W - 22 * mm - 14 * mm])
                wrap.setStyle(TableStyle([
                    ("LEFTPADDING", (0, 0), (-1, -1), indent),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                    ("TOPPADDING", (0, 0), (-1, -1), 0),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                ]))
                story.append(wrap)
            else:
                story.append(row)
            continue

    # Closing block
    story.append(Spacer(1, 16))
    story.append(HRFlowable(width="100%", thickness=0.6, color=LINE))
    story.append(Spacer(1, 6))
    story.append(Paragraph(
        '<font name="{}" color="#1A3C34"><b>So gehen wir vor.</b></font>&nbsp;&nbsp;'
        'Die <b>Must-have</b> Punkte zuerst durchgehen (1–2 Stunden). '
        'Danach schicke mir die Antworten und ich baue alles in einem Rutsch in die Website ein. '
        'Wichtig und Nice-to-have kann schrittweise nachgeliefert werden.'.format(SANS_B),
        BODY,
    ))
    story.append(Spacer(1, 14))
    story.append(Paragraph(
        '<i>Stand: April 2026 · Bitte beim Ausfüllen Datum aktualisieren.</i>',
        SMALL,
    ))

    doc.build(story)
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    build()
