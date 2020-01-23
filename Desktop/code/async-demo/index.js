getUser(1, getRepositories);

function getRepositories(user, callback2) {
  console.log(`Getting repos for user: ${user.name}...`);
  setTimeout(() => {
    const repos = [1, 2, 3];
    console.log(`Repos for ${user.name}: ${repos}`);
    callback2(repos, displayCommits);
  }, 2000);
}

function getCommits(repos, callback3) {
  console.log(`Getting commits for repo: ${repos[0]}...`);
  setTimeout(() => {
    const commits = ["Commit 1 ", "Commit 2 ", "Commit 3 "];
    console.log("Logging commits...");
    callback3(commits);
  }, 2000);
}

function displayCommits(commits) {
  setTimeout(() => {
    console.log(`Commits: ${commits}`);
  }, 2000);
}

function getUser(id, callback) {
  console.log(`Getting user with id ${id} from DB...`);
  setTimeout(() => {
    console.log("User: ", { id: id, name: "Katya" });
    callback({ id: id, name: "Katya" }, getCommits);
  }, 2000);
}
