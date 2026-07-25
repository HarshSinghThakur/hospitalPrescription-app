

export const GlobalConstant = {
    API_METHOD : {
        LOGIN: 'login',
        CREATE_USER: 'staff',
        FILTER_USER: 'staff?roleName=',
        CREATE_MEDICINE: 'medicines',
        EDIT_MEDICINE: 'medicines/',
        DELETE_MEDICINE: 'medicines/',
    },
    REG_EXP: {
        EMAIL:'/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/',
        PANCARD:'^[A-Z]{5}[0-9]{4}[A-Z]$',
    },
    VALIDATION_MESSAGE: {
        REQUIRED: "This is required",
        EMAIL: 'Email is required',
    },
    LOGGED_USER_SESSION_KEY: "userData",
    MEDICINE_FORM_LIST: [
        "Tablet",
        "Capsule",
        "Syrup",
        "Injection"
    ],
}