const loginService = async (email, password) => {
  try {
    console.log("inside service");
    const data = {
      email: email,
      password: password,
    };

    // Send a POST request to the registration endpoint
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/user/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Content type
        },
        body: JSON.stringify(data), // Convert data object to JSON string
      }
    );
    if (response.ok) {
      const responseData = await response.json();
      console.log("okay res is ", responseData);
      return responseData;
    }

    console.log("not ok res is ", response);

    return response;
  } catch (error) {
    return { message: "Something Went Wrong!" };
  }
};

export default loginService;
