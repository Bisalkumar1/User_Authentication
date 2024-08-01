const changePasswordService = async (oldPassword, newPassword) => {
  try {
    console.log("inside service");
    const data = {
      oldPassword,
      newPassword,
    };

    // Send a POST request to the registration endpoint
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/user/change-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Content type
          authorization: `Bearer ${localStorage.getItem("token")}`,
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

export default changePasswordService;
