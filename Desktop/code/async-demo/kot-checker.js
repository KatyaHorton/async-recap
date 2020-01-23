const cyanColor = "\x1b[36m%s\x1b[0m";
const blueColor = "\x1b[34m%s\x1b[0m";
const redColor = "\x1b[31m%s\x1b[0m";

const getUser = id => {
  console.log(cyanColor, `Getting Kot with id: ${id}...`);
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (true) res({ id: id, name: id });
      rej(new Error(`Could not fetch user with id ${id}.`));
    }, 2000);
  });
};

const getRepositories = user => {
  console.log(cyanColor, `Checking naughtiness for Kot: ${user.name}...`);
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (user.name === "Mark") {
        console.log('"Mark is actually quite naughty!"');
        res("Mark is actually quite naughty!");
      }

      rej(
        new Error(
          `Why do you even check that? Everybody knows ${user.name} is not naughty. Mark, however...`
        )
      );
    }, 000);
  });
};

const getCommits = str => {
  console.log(cyanColor, `Checking statement: "${str}"...`);
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (true) {
        const commits = [
          "Mark is very naughty",
          "very VERY naughty",
          " Yes, Mark is very naughty!!!! WHY YOU ARE SO NAUGHTY MARK?!"
        ];
        res(commits);
      }
      rej(new Error(`Could not get commits for repo: ${str}.`));
      console.log(cyanColor, "Logging result...");
    }, 3000);
  });
};

function displayCommits(commits) {
  setTimeout(() => {
    console.log(blueColor, `Conclusion: ${commits}`);
  }, 3000);
}

const checkNaughtiness = async kot => {
  try {
    const user = await getUser(kot);
    const repos = await getRepositories(user);
    const commits = await getCommits(repos);
    displayCommits(commits);
  } catch (err) {
    console.log("Error: ", err.message);
  }
};

checkNaughtiness("Katya");
