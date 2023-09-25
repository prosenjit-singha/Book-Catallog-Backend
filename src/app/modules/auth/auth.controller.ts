import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import service from "./auth.service";

const signIn = catchAsync(async (req, res) => {
  const { accessToken } = await service.signIn(req.body);

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "User signin successfully!",
    token: accessToken,
  });
  // sendResponse(res, {
  //   status: 200,
  //   data: {
  //     accessToken,
  //     user: data,
  //   },
  //   message: "User successfully logged in",
  // });
});

const signUp = catchAsync(async (req, res) => {
  const { data } = await service.signUp(req.body);
  sendResponse(res, {
    status: 200,
    data,
    message: "User successfully signed up",
  });
});

export default { signIn, signUp };
