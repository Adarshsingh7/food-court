import axios, { AxiosInstance } from "axios";

interface User {
  _id: string;
  username: string;
  email: string;
  phone: string;
  photo: string;
  role: "admin" | "user"; // Assuming role could be 'admin' or 'user'
  passwordChangedAt: string; // Can be Date if you convert it while using
  __v: number;
}

class Auth {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:3000/api/v1/users",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.getToken()}`,
      },
    });
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this);
    this.getToken = this.getToken.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }
  login = async (data: { email: string; password: string }) => {
    try {
      const response = await this.api.post("/login", data);
      return response.data.user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  signup = async (data: {
    email: string;
    password: string;
    confirmPassword: string;
  }): Promise<User> => {
    try {
      const response = await this.api.post<{ user: User }>("/signup", data);
      return response.data.user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  isAuthenticated = async (): Promise<User> => {
    const currentUser = await this.api.get<{ user: User }>("/me");
    return currentUser.data.user;
  };

  logout = async () => {
    this.clearToken();
  };

  setToken = (token: string) => {
    localStorage.setItem("token", token);
  };

  clearToken = () => {
    localStorage.removeItem("token");
  };

  getToken = () => {
    return localStorage.getItem("token");
  };
}

const auth = new Auth();
export { auth };
