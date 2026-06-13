# 🚩 Flag It Guardian

A community-driven fraud awareness and reporting bot for Hack Club, built by BitBuzz.

Flag It Guardian automatically detects discussions related to scams, phishing, hacked accounts, identity theft, fake recruiters, financial fraud, and other online threats. When a potential fraud-related conversation is detected, the bot provides reporting resources through Flag It to help users take action and protect others.

## Why?

Every day, people encounter:

* Phishing attacks
* Fake internships and recruiters
* Account takeovers
* Investment scams
* Identity theft
* Financial fraud

Many victims don't know where to report incidents or seek help.

Flag It Guardian bridges that gap by connecting users with reporting resources at the moment they need them most.

## Features

### 🚩 Automatic Fraud Detection

Detects discussions involving:

* Scams
* Fraud
* Phishing
* Hacked accounts
* Identity theft
* Fake recruiters
* Fake internships
* Financial loss
* Cryptocurrency scams
* Malware and ransomware

### 💬 Slack Integration

Responds directly within Hack Club Slack conversations using:

* Keyword-based detection
* Threaded responses
* Community reporting resources

### ⚡ Slash Commands

```bash
/flagit
```

Provides quick access to reporting resources and information.

### ☁️ Cloud Hosted

Deployed on Hack Club Nest with:

* 24/7 uptime
* PM2 process management
* Automatic restart on crashes and reboots

## Example

User:

```text
I got scammed yesterday
```

Flag It Guardian:

```text
🚩 Flag It Guardian

If you've been scammed, phished, hacked, impersonated, or lost money online, please consider filing a report:

https://www.bitbuzz.club/flag-it

❤️ One report can protect many others.
```

## Architecture

```text
Slack Message
      ↓
Flag It Guardian
      ↓
Fraud Detection Engine
      ↓
Flag It Reporting System
      ↓
bitbuzz.club/flag-it
```

## Tech Stack

* Node.js
* Slack Bolt SDK
* PM2
* Hack Club Nest
* GitHub

## Installation

Clone the repository:

```bash
git clone https://github.com/hridhaan-s/flagit-guardian.git
cd flagit-guardian
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
SLACK_BOT_TOKEN=your_xoxb_token
SLACK_APP_TOKEN=your_xapp_token
```

Run locally:

```bash
node index.js
```

## Mission

Flag It Guardian is part of the broader Flag It initiative by BitBuzz.

The goal is simple:

**Make fraud reporting more accessible, visible, and actionable for young people online.**

Every report has the potential to prevent future victims, strengthen community awareness, and contribute to a safer internet.

## Built By

**BitBuzz**

A student-led initiative focused on expanding access to knowledge, opportunities, and digital safety.

🌐 https://www.bitbuzz.club

---

*"One report can protect many others."*
