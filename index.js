require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

// Slash command
app.command("/flagit", async ({ ack, respond }) => {
  await ack();

  await respond({
    text: `🚩 *Flag It Guardian*

If you've experienced a scam, phishing attack, hacked account, impersonation, or financial loss:

🔗 https://www.bitbuzz.club/flag-it

❤️ One report can protect many others.`
  });
});

// Automatic detection
app.message(async ({ message, say }) => {
  if (message.subtype) return;

  const text = (message.text || "").toLowerCase();

  // Ignore common false positives
  if (
    text.includes("hack club") ||
    text.includes("hackathon") ||
    text.includes("hackatime")
  ) {
    return;
  }

  const triggers = [
    "scam",
    "scammed",
    "fraud",
    "phishing",
    "phished",
    "hacked",
    "account stolen",
    "discord hacked",
    "discord stolen",
    "got hacked",
    "got scammed",
    "i got scammed",
    "i was scammed",
    "lost money",
    "money stolen",
    "fake website",
    "fake internship",
    "fake recruiter",
    "fake offer",
    "identity theft",
    "impersonation",
    "otp scam",
    "upi scam",
    "investment scam",
    "crypto scam",
    "rug pull",
    "fake giveaway",
    "fake nitro",
    "bank fraud",
    "malware",
    "ransomware"
  ];

  const matched = triggers.find(t => text.includes(t));

  if (matched) {
    console.log(`🚩 Triggered by: ${matched}`);

    await say({
      thread_ts: message.ts,
      text: `🚩 *Flag It Guardian*

:hackerparrot: If you've been scammed, phished, hacked, impersonated, or lost money online, please consider filing a report:

🔗 https://www.bitbuzz.club/flag-it

❤️ One report can protect many others.`
    });
  }
});

// Start app
(async () => {
  await app.start();
  console.log("🚩 Flag It Guardian is running!");
})();