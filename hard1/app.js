function brackets(string) {
    const brackets = ["()", "{}", "[]"];
    brackets.forEach((element, index) => {
       if (element === `${string.slice(0, 1)}${string.slice(-1)}`) {
        console.log(true);
       }
    });
  }
  brackets("{helloworld}");
 