import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import service from "./auth.service";

const signIn = catchAsync(async (req, res) => {
  const { data, accessToken } = await service.signIn(req.body);
  sendResponse(res, {
    status: 200,
    data: {
      accessToken,
      user: data,
    },
    message: "User successfully logged in",
  });
});

const signUp = catchAsync(async (req, res) => {
  const { data, accessToken } = await service.signUp(req.body);
  sendResponse(res, {
    status: 200,
    data: {
      accessToken,
      user: data,
    },
    message: "User successfully signed up",
  });
});

export default { signIn, signUp };
