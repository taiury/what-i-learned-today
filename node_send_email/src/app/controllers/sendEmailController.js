const transporter = require("../utils/sendMail");

module.exports = {
  async store(req, res) {
    try {
      const { setTo, setText } = req.body;

      if (!setTo || !setText) {
        return res.status(400).send({ error: "Insufficient information" });
      }

      const parts = setTo.split("@");

      if (!parts.length === 2) {
        return res.status(400).send({ error: "Invalid email" });
      }

      const [user, typeEmail] = parts;

      if (
        !typeEmail === "gmail.com" ||
        !typeEmail === "hotmail.com" ||
        !typeEmail === "outlook.com" ||
        !typeEmail === "live.com"
      ) {
        return res.status(400).send({ error: "Invalid email" });
      }

      await transporter.sendMail({
        from: "NodeJS Project",
        to: `${setTo}`,
        subject: "Nodejs project",
        text: `${setText}`,
        html: `<b>${setText}</b>`,
      });

      return res.send({ sendMail: true });
    } catch (err) {
      console.log(err);
    }
  },
};
