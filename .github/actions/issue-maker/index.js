const core = require("@actions/core");
const github = require("@actions/github");
const octo = require("@Octokit/rest");

async function run() {
    try {
      const issueTitle = core.getInput("issue-title");
      const jokeBody = core.getInput("joke");
      const token = core.getInput("repo-token");
  
      const octokit = new Ocktokit({
          auth: token
      })//github.getOctokit(token);

  
      await octokit.issues.create({
          repo: github.context.repo.repo,
          owner: github.context.repo.owner,
          title: issueTitle,
          body: jokeBody
      });
    } catch (err) {
        core.setFailed(err.message);
    }
  }
  
  run()