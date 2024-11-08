import axios from 'axios';

const axiosClient = axios.create({
    baseURL: "https://mail.minhkhangtravel.vn/",
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosClient;