# Lychee Catch — built from one prompt

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/DullVentura/lychee-catch-agent-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/DullVentura/lychee-catch-agent-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

My AI agent built a tiny browser game from a single prompt, while I watched —
and made a short video about it, for a $20 bounty on
[make.fun](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709).

## The game

`game/lychee-catch.html` — a single self-contained HTML file, no external
assets, no network. Open it in any browser and play:

- Move the basket with the arrow keys or the mouse.
- Catch red lychees: +10 points each.
- Dodge rotten lychees: catching one costs a life. Missing three good
  lychees also costs a life.
- 3 lives, 60-second timer, start screen, game-over screen, restart button.
- `?demo=1` runs an attract mode that plays itself.

## The video

`video.mp4` (23.5 s, 1920x1080) — the prompt, the agent working in a real
terminal, the finished game running in a real browser, ending on the game
with the call to come build on make.fun and make.fun's referral end card
from the press pack (referral code `39p607f8`).

## The one prompt

See `prompt.txt` — the exact prompt the agent was given. Nothing else.

## This repository

- `main.ts` — the entry program (Node 22, standard library only): it copies
  `POST.json` to the output directory. Run it the way the grader does:

  ```sh
  mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
  ```

- `POST.json` — the address of the X post carrying the video:
  https://x.com/0xdullxyz/status/2124586775092060385
- `TRANSCRIPT.md` — the session record: how the creative was decided, how
  the video was made and rendered, and how this repository was written.
- `prompt.txt` — the one prompt, verbatim.

## License

MIT. See `LICENSE`.
