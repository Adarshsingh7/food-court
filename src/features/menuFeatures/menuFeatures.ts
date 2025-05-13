import axios, { AxiosInstance, AxiosResponse } from "axios";
import { MenuItem } from "../../types/menuType";
import LocalStorageHandler from "../../utils/LocalStorageHandler";

class MenuService {
  private api: AxiosInstance;

  constructor() {
    // Initialize Axios instance with base URL.
    this.api = axios.create({
      baseURL: "https://plankton-app-2dhbr.ondigitalocean.app/api/v1/menus",
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.updateMenu = this.updateMenu.bind(this);
    this.getMenu = this.getMenu.bind(this);
    this.getAllMenu = this.getAllMenu.bind(this);
    this.createMenu = this.createMenu.bind(this);
    this.deleteMenu = this.deleteMenu.bind(this);
  }

  // Get all orders
  public async getAllMenu(): Promise<MenuItem[]> {
    const restroId = LocalStorageHandler.get("restroId");
    try {
      if (!restroId) throw new Error("restro id required");
      const response: AxiosResponse<{ data: { data: MenuItem[] } }> =
        await this.api.get(`/?owner=${restroId}`);
      return response.data.data.data;
    } catch (error) {
      console.error("Error fetching menu:", error);
      throw error;
    }
  }

  // Get a single order by ID
  public async getMenu(id: string): Promise<MenuItem> {
    try {
      const response: AxiosResponse<{ data: { data: MenuItem } }> =
        await this.api.get(`/${id}`);
      return response.data.data.data;
    } catch (error) {
      console.error(`Error fetching order with id ${id}:`, error);
      throw error;
    }
  }

  // Create a new order
  public async createMenu(menuData: Partial<MenuItem>): Promise<MenuItem> {
    try {
      console.log(menuData);
      const response: AxiosResponse<{ data: { data: MenuItem } }> =
        await this.api.post("/", menuData);
      return response.data.data.data;
    } catch (error) {
      console.error("Error creating order:", error);
      throw error;
    }
  }

  // Update an existing order by ID
  public async updateMenu(
    id: string,
    updatedData: Partial<MenuItem>,
  ): Promise<MenuItem> {
    try {
      const response: AxiosResponse<MenuItem> = await this.api.patch(
        `/${id}`,
        updatedData,
      );
      return response.data;
    } catch (error) {
      console.error(`Error updating order with id ${id}:`, error);
      throw error;
    }
  }

  // Delete an order by ID
  public async deleteMenu(id: string): Promise<void> {
    try {
      await this.api.delete(`/${id}`);
    } catch (error) {
      console.error(`Error deleting order with id ${id}:`, error);
      throw error;
    }
  }
}

const menu = new MenuService();

export { menu };
