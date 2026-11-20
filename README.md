# gta6-clipper-01 — "GTA 6's most INSANE shot — AI made this for $500"

A make.fun bounty entry: a vertical YouTube Short cut from Rockstar's Grand
Theft Auto VI Trailer 2. One continuous slice of the trailer's climax — a
jet-ski chase across the bay, Jason on his chopper as a plane roars past
inches overhead, into a night truck chase — then the make.fun pitch on
screen: viewers can make clips like this with AI and earn real money on
make.fun.

## The clip

- File handed to the uploader: `clip.mp4` (1080x1920, 14.4 seconds,
  H.264 + AAC, 5.1 MB)
- Hook (0–7s): Trailer 2, 140.0–147.0s, full trailer audio
- Pitch (7–14.4s): the motorcycle-and-plane shot slowed to 0.25x with motion
  interpolation, darkened, audio faded out, pitch text accumulating on screen
- The clip was cut and rendered in the builder session with ffmpeg; see
  CREATIVE.md for the moment choice and the helper ideas used.

## The video (the entry)

The video itself is the entry; places go by its YouTube views, most first.
`VIDEO.json` at the repository root holds its address:

    {"url": "https://www.youtube.com/shorts/<id>"}

Its description must carry the bounty's line word for word plus one of the
account's play codes — the exact text to paste is in DESCRIPTION.md.

## The program

`main.ts` copies `VIDEO.json` from the repository root to `/output/VIDEO.json`
after checking it names a real YouTube video. Run it locally with:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
