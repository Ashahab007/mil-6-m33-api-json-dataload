// ! Async/ Await (Another way of fetch, then method)
/* Javascript synchronous way তে কাজ করে। অনেক ক্ষেত্রে কিছু task করতে অনেক
      time লাগে। সেক্ষেত্রে তাকে wait করাতে হয়। বিশেষ করে API fetch এর ক্ষেত্রে।
      সেক্ষেত্রে Async /Await use করতে হয়।*/

const handleUser = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(response);
    const data = await response.json();
    console.log(data); //{userId: 1, id: 1, title: 'delectus aut autem', completd: false}
  } catch (error) {
    console.log(error);
  }
};
handleUser();

/*Async/ Await এ error catch এর ক্ষেত্রে try/Catch block use করতে হয়। */
