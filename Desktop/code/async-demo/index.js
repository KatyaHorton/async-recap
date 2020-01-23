const cyanColor = "\x1b[36m%s\x1b[0m";
const blueColor = "\x1b[34m";
const getUser = id => {
  console.log(cyanColor, `Fetching user with id: ${id}...`);
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (true) res({ id: id, name: "Katya" });
      rej(new Error(`Could not fetch user with id ${id}.`));
    }, 2000);
  });
};

const getRepositories = user => {
  console.log(cyanColor, `Getting repos for user: ${user.name}...`);
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (true) res([1, 2, 3]);
      rej(new Error(`Could not fetch repositories for ${user.name}.`));
    }, 2000);
  });
};

getUser(1)
  .then(result =>
    getRepositories(result)
      .then(res =>
        getCommits(res)
          .then(res => displayCommits(res))
          .catch(err => console.log(`Error: ${err.message}`))
      )
      .catch(err => console.log(`Error: ${err.message}`))
  )
  .catch(err => console.log("Error: ", err.message));

const getCommits = repos => {
  console.log(cyanColor, `Getting commits for repo: ${repos[0]}...`);
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (true) {
        const commits = ["Commit 1 ", "Commit 2 ", "Commit 3 "];
        res(commits);
      }
      rej(new Error(`Could not get commits for repo: ${repos[0]}.`));
      console.log(cyanColor, "Logging commits...");
    }, 2000);
  });
};

function displayCommits(commits) {
  setTimeout(() => {
    console.log(blueColor, `Commits: ${commits}`);
  }, 2000);
}
