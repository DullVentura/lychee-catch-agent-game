# Session transcript — Lychee Catch (make.fun bounty)

Bounty: `post-x-the-agent-builds-a-game-from-20261122-1709` —
"The agent builds a game from one prompt". Pot $20, top 10 share.
Opened 2026-11-22 17:09 UTC; deadline 2026-11-24 17:09 UTC.
This builder session started 2026-11-22 ~18:11 UTC, after the opening.

## 1. Quota and kit

- `makefun status --competition post-x-the-agent-builds-a-game-from-20261122-1709`:
  entries made 0, left today 6 of 6, daily limit 50 of 50, hard limit 40 of 40,
  **can submit now: yes**.
- Kit downloaded fresh from `/c/<slug>/kit`: kit level 36 (header
  `x-makefun-kit-level: 36`), bundle sha256
  `54dd342d7ebe67a9af9ec5515a458b4b33cd28b930399d930dc9a2dbe883a07a`.
  RULES.txt read before anything else.
- Referral code from `GET /api/me/referrals`: `39p607f8`
  (link `https://make.fun/r/39p607f8`).
- Play code from `GET /api/competitions/<slug>/play-code?n=0`:
  `makefun-sultana-almond-keystone` (the kit CLI's check prints the same
  code 0). The account's four codes are sultana-almond-keystone,
  river-bagel-sprocket, picnic-applause-cactus, puppy-fishbowl-field.

## 2. Creative decision

The video shows, in order: the one prompt on screen (the hook — the viewer
instantly gets the premise: one prompt becomes a game), the agent working
in a real terminal (the actual build commands of this session), and the
finished game running in a real browser with the score climbing. It ends on
the game running with "Come build on make.fun" and make.fun's referral end
card carrying the referral code. Why it holds a viewer: the premise is the
payoff — you watch to see whether one prompt really becomes a playable game,
and the gameplay footage delivers that proof. Fast cuts, no dead air.

## 3. The one prompt

Saved verbatim in `prompt.txt`:

> Build a tiny browser game in a single self-contained HTML file: "Lychee
> Catch". A basket moves left/right with arrow keys or mouse. Lychees fall
> from the top at increasing speed; catch good red lychees to score points.
> Rotten dark lychees cost one life if caught; missing three good lychees
> also costs one life. 3 lives, 60-second timer, score display, start
> screen, game-over screen with a restart button. Bright, playful colors,
> big readable text, no external assets, no network.

## 4. Building the game

- Wrote `game/lychee-catch.html` (254 lines, single self-contained file,
  canvas game, no external assets) in this session, then revised it twice:
  demo mode auto-restarts after game over, and the game state is exposed
  as `window.__game` for automated smoke tests.
- Verified in this session, in a real terminal recorded with `script`
  (`terminal.typescript` + `terminal.timing` in the entry folder):
  `node --version` v24.22.1; `node --check` on the extracted inline script:
  OK (7,170 bytes); served over HTTP, `curl` returned HTTP 200;
  Playwright smoke test: score 0 → 40 in 5 s, timer 58.9 → 54.9 s,
  mode play, console errors none — **SMOKE: PASS**.

## 5. Making and rendering the video

All in this session, with commands run here:

- Prompt card: `prompt-card.png` (1920x1080), rendered from `prompt.txt`
  verbatim with PIL.
- Terminal segment: 240 frames (8 s @ 30 fps) rendered from the real
  `terminal.typescript` of step 4 — every line on screen is a command or
  an output the real terminal actually printed, in order. Two faithful
  repairs, documented here: pacing `sleep` lines and `exit` are left out,
  and one `curl` echo line the tty garbled while input was piped in was
  restored from the same typescript's own input record, which holds the
  exact command verbatim. Nothing was invented.
- Gameplay: Playwright recorded the real game running in headless Chromium
  (`?demo=1` attract mode) for 10 s — score 0 → 20, no page errors.
  The recording is `page@82346d9a2444e28ed63d7298af613026.webm`.
- End card: `makefun-card-16x9-transparent.webm` fetched fresh from the
  press pack manifest (`https://make.fun/press/manifest.json`); its sha256
  `84bca17df5ea3d8d96a28e354587bb72079b813e41a5268bb325b6c9ee307e29`
  matches the manifest exactly. The make.fun brand badge
  (`makefun-badge-16x9.png`) overlays the video from the first frame until
  the card comes in. Code `39p607f8` typed into the card's field in
  JetBrains Mono Bold (downloaded from the JetBrains Mono repository),
  62 px, ink #191419, at the manifest's 16:9 field position (x 432,
  centred on y 733), following `https://make.fun/press/llms.txt` exactly
  (blur sigma 28, saturation 0.35, card over the last frame held 2.5 s,
  plus 1 s hold of the finished card).
- Assembly: `ffmpeg` — prompt card 3 s + terminal 8 s + gameplay 9 s
  (trimmed 1.5–10.5 s) = 20.03 s clip, then the end-card pass.
  Final `video.mp4`: **23.53 s, 1,310,672 bytes, 1920x1080, H.264 +
  silent AAC**. Last frame inspected: magenta card, make.fun mark and
  wordmark, "Use my referral code", field holding `39p607f8`. A mid-video
  frame inspected: game running (Score 10), badge top-left, "Come build
  on make.fun" lower third.

## 6. Writing this repository

- `main.ts` written in this session (Node 22, stdlib only): validates
  `POST.json` parses with a string `url`, then copies it byte for byte to
  `MAKEFUN_OUTPUT_DIR` (default `/output`). Revised once (validation added).
- `POST.json` holds a placeholder (`https://x.com/0xdullxyz/status/pending`)
  because the X post does not exist yet — the post is made only after the
  user approves the exact text. This file is updated with the real address
  before submitting.
- `LICENSE` is the MIT license with an `SPDX-License-Identifier: MIT` line.
- Ran the program the way the grader does:
  `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
  — exit 0, `out/POST.json` identical to `POST.json` (verified with `cmp`).
  (The `out/` directory was a local test artifact and was removed.)
- `makefun check --kit . --repo <this repo> --worktree`: **pass**
  competition_open, snapshot, entrypoint, license_osi; **FAIL**
  transcripts_present (no bundle was passed — the bundle is made by the
  top-level agent at submit time from the recorded sessions, with
  `--system-prompt ~/workspace/system/system_prompt.md`); the 15
  transcript-dependent checks skip on that. `grade-local` reports this
  competition is graded on the server only (program/v1, scorer not in the
  kit), so there is no local grade to run.
- Repository created on GitHub after the opening:
  https://github.com/DullVentura/lychee-catch-agent-game
  (public, created 2026-11-22T18:25:49Z, owner DullVentura).

## 7. What is still pending (not done in this session)

- The video is NOT posted on X. Posting needs the user's approval of the
  exact post text (draft prepared by the builder, in the handoff).
- `POST.json` must be updated with the real post address, re-uploaded to
  the repository, and the entry submitted with the transcripts bundle
  before the deadline 2026-11-24 17:09 UTC. Nothing was submitted from
  this session, and nothing was paid.
