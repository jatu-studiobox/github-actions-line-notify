const core = require("@actions/core");
const axios = require("axios");
const FormData = require("form-data");

try {
  const token = core.getInput("access_token");
  const repositoryName = core.getInput("repository_name");
  const issueNo = core.getInput("issue_number");
  const issueTitle = core.getInput("issue_title");
  const issueHtmlUrl = core.getInput("issue_html_url");

  let message = "\nIssue is opened.";
  message += "\n📦: " + repositoryName;
  message += "\n[#" + issueNo + "]: " + issueTitle;
  message += "\n" + issueHtmlUrl;

  const formLineNotify = new FormData();

  formLineNotify.append("message", message);

  let lineConfig = {
    url: "https://notify-api.line.me/api/notify",
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token,
      ...formLineNotify.getHeaders(),
    },
    data: formLineNotify,
  };

  axios(lineConfig)
    .then((res) => {
      const data = res.data;
      console.log(data);
      if (data.status !== 200) {
        core.setFailed(data.message);
      }
    })
    .catch((error) => {
      core.setFailed(error.message);
    });
} catch (error) {
  core.setFailed(error.message);
}
