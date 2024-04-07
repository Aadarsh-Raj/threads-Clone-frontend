import React from "react";
import "./Styles/createthreads.css";
import { StoreFunction } from "../Context/store";
const CreateThreads = () => {
  const { userName,showThreadForm, setShowThreadForm } = StoreFunction();
  function isFormHidden() {
    setShowThreadForm(false);
  }
  function changeColor(e) {
    e.target.innerText = "";
    e.target.style.color = "white";
  }
  return (
    <>
      {
        showThreadForm ? (<> <div className="create-threads-container">
        <div className="threads-form-container-card">
          <div className="form-header">
            <div className="form-title">New Thread</div>
            <div className="close-form-btn" onClick={isFormHidden}>
              Cancel
            </div>
          </div>
          <div className="form-container">
            <div className="profile-photo-container">
              <img src="" alt="Image" />
            </div>
            <div className="form-input-username-container">
              <div className="form-username-container">
                {userName}
              </div>
              <div className="form-input-container">
                <form action="">
                  <p
                    type="text"
                    contentEditable="true"
                    className="editable-para"
                    onClick={changeColor}
                  >
                    {" "}
                    Start a thread...
                  </p>{" "}
                  <br />
                  <label htmlFor="">
                    <svg
                      aria-label="Attach media"
                      role="img"
                      viewBox="0 0 24 24"
                      class="x1lliihq xffa9am x1jwls1v x1n2onr6 x17fnjtu x1gaogpn"
                    >
                      <title>Attach media</title>
                      <g>
                        <path
                          clip-rule="evenodd"
                          d="M2.00207 9.4959C1.65132 7.00019 1.47595 5.75234 1.82768 4.73084C2.13707 3.83231 2.72297 3.05479 3.50142 2.50971C4.38639 1.89005 5.63425 1.71467 8.12996 1.36392L10.7047 1.00207C13.2004 0.651325 14.4482 0.47595 15.4697 0.827679C16.3682 1.13707 17.1458 1.72297 17.6908 2.50142C17.9171 2.82454 18.0841 3.19605 18.2221 3.65901C17.7476 3.64611 17.2197 3.64192 16.6269 3.64055C16.5775 3.5411 16.5231 3.44881 16.4621 3.36178C16.0987 2.84282 15.5804 2.45222 14.9814 2.24596C14.3004 2.01147 13.4685 2.12839 11.8047 2.36222L7.44748 2.97458C5.78367 3.20841 4.95177 3.32533 4.36178 3.73844C3.84282 4.10182 3.45222 4.62017 3.24596 5.21919C3.01147 5.90019 3.12839 6.73209 3.36222 8.3959L3.97458 12.7531C4.15588 14.0431 4.26689 14.833 4.50015 15.3978C4.50083 16.3151 4.50509 17.0849 4.53201 17.7448C4.13891 17.4561 3.79293 17.1036 3.50971 16.6991C2.89005 15.8142 2.71467 14.5663 2.36392 12.0706L2.00207 9.4959Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                        ></path>
                        <g>
                          <g clip-path="url(#:r4:)">
                            <rect
                              fill="none"
                              height="15.5"
                              rx="3.75"
                              stroke="currentColor"
                              stroke-width="1.5"
                              width="15.5"
                              x="6.75"
                              y="5.8894"
                            ></rect>
                            <path
                              d="M6.6546 17.8894L8.59043 15.9536C9.1583 15.3857 10.0727 15.3658 10.6647 15.9085L12.5062 17.5966C12.9009 17.9584 13.5105 17.9451 13.8891 17.5665L17.8181 13.6376C18.4038 13.0518 19.3536 13.0518 19.9394 13.6375L22.0663 15.7644"
                              fill="none"
                              stroke="currentColor"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                            ></path>
                            <circle
                              cx="10.75"
                              cy="9.8894"
                              fill="currentColor"
                              r="1.25"
                            ></circle>
                          </g>
                        </g>
                      </g>
                      <defs>
                        <clipPath id=":r4:">
                          <rect
                            fill="white"
                            height="17"
                            rx="4.5"
                            width="17"
                            x="6"
                            y="5.1394"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </label>
                  <input
                    type="file"
                    className="file-input"
                    accept=".jpg, .jpeg, .png"
                  />
                  <label htmlFor="">
                    <svg
                      aria-label="Add a GIF"
                      role="img"
                      viewBox="0 0 24 24"
                      class="x1lliihq xffa9am x1jwls1v x1n2onr6 x17fnjtu x1gaogpn"
                    >
                      <title>Add a GIF</title>
                      <svg
                        fill="none"
                        height="24"
                        title="123"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>GIF Picker Icon</title>
                        <g clip-path="url(#:r5:)">
                          <path
                            d="M20.6472 13.7545L21.2766 14.1623L20.6472 13.7545C20.4715 14.0256 20.2404 14.2752 19.647 14.9058L15.4667 19.3473C14.7767 20.0804 14.5029 20.3659 14.1962 20.5791C13.785 20.8649 13.3208 21.0655 12.8308 21.169C12.4654 21.2462 12.0698 21.25 11.0631 21.25C9.62515 21.25 8.58506 21.2496 7.76313 21.1923C6.94813 21.1356 6.40373 21.0256 5.95094 20.8336C4.69662 20.3019 3.69812 19.3034 3.16638 18.0491C2.97444 17.5963 2.86444 17.0519 2.80767 16.2369C2.75042 15.4149 2.75 14.3748 2.75 12.9369V11.6C2.75 9.90747 2.75058 8.68317 2.82925 7.72029C2.90721 6.76615 3.05809 6.13493 3.32222 5.61655C3.82555 4.6287 4.6287 3.82555 5.61655 3.32222C6.13493 3.05809 6.76615 2.90721 7.72029 2.82925C8.68317 2.75058 9.90747 2.75 11.6 2.75H13.1363C14.48 2.75 15.4519 2.75037 16.2211 2.80049C16.984 2.8502 17.4953 2.94657 17.9222 3.11455C19.2784 3.64817 20.3518 4.72155 20.8855 6.07779C21.0534 6.50473 21.1498 7.01596 21.1995 7.77888C21.2496 8.54813 21.25 9.52002 21.25 10.8637C21.25 11.7295 21.2472 12.0697 21.1893 12.3875C21.1006 12.8745 20.9163 13.3391 20.6472 13.7545Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                          ></path>
                          <path
                            d="M13 21V19.3784V19.3784C13 15.8557 15.8557 13.0001 19.3784 13.0002V13.0002H21"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          ></path>
                          <path
                            d="M8.33957 11.406C6.68121 11.406 5.69995 10.432 5.69995 8.69756C5.69995 6.98488 6.68121 6 8.2925 6C9.33894 6 10.1283 6.44899 10.4361 6.99936C10.5121 7.14058 10.5411 7.26369 10.5411 7.39404C10.5411 7.77785 10.2731 8.04218 9.88207 8.04218C9.58153 8.04218 9.35342 7.92631 9.16513 7.67647C8.91891 7.34697 8.66907 7.20937 8.29974 7.20937C7.64798 7.20937 7.26417 7.74526 7.26417 8.67583C7.26417 9.62812 7.7023 10.1966 8.37578 10.1966C8.87546 10.1966 9.23031 9.91779 9.27376 9.49777L9.281 9.42535H8.98047C8.63648 9.42535 8.41199 9.24431 8.41199 8.91481C8.41199 8.58531 8.63286 8.40426 8.98047 8.40426H9.99069C10.4795 8.40426 10.7583 8.69393 10.7583 9.2081C10.7583 10.4501 9.89655 11.406 8.33957 11.406Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M12.5259 11.406C12.0371 11.406 11.7583 11.1163 11.7583 10.6021V6.80384C11.7583 6.28967 12.0371 6 12.5259 6C13.0147 6 13.2936 6.28967 13.2936 6.80384V10.6021C13.2936 11.1163 13.0147 11.406 12.5259 11.406Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M15.3112 11.3606C14.8224 11.3606 14.5436 11.0709 14.5436 10.5568V6.849C14.5436 6.33484 14.8224 6.04517 15.3112 6.04517H17.6105C18.0232 6.04517 18.2876 6.26604 18.2876 6.65709C18.2876 7.04815 18.016 7.26902 17.6105 7.26902H16.0788V8.26839H17.4548C17.8386 8.26839 18.0848 8.4784 18.0848 8.84411C18.0848 9.20981 17.8458 9.41983 17.4548 9.41983H16.0788V10.5568C16.0788 11.0709 15.8 11.3606 15.3112 11.3606Z"
                            fill="currentColor"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id=":r5:">
                            <rect
                              fill="white"
                              height="20"
                              transform="translate(2 2)"
                              width="20"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </svg>
                  </label>
                  <input type="file" className="file-input" accept=".gif" />
                  <button type="submit" className="submit-btn">
                    Post{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> </>) : null
      }
    </>
  );
};

export default CreateThreads;
