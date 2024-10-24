/** @format */

import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Order } from "../../types/orderType";

class OrderService {
  private api: AxiosInstance;

  constructor() {
    // Initialize Axios instance with base URL.
    this.api = axios.create({
      baseURL: "http://127.0.0.1:3000/api/v1/orders",
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.updateOrder = this.updateOrder.bind(this);
    this.getOrder = this.getOrder.bind(this);
    this.getAllOrders = this.getAllOrders.bind(this);
  }

  // Get all orders
  public async getAllOrders(): Promise<Order[]> {
    try {
      const response: AxiosResponse<{ data: { data: Order[] } }> =
        await this.api.get("/");
      return response.data.data.data;
    } catch (error) {
      console.error("Error fetching orders:", error);
      throw error;
    }
  }

  // Get a single order by ID
  public async getOrder(id: string): Promise<Order> {
    try {
      const response: AxiosResponse<{ data: { data: Order } }> =
        await this.api.get(`/${id}`);
      console.log({ response });
      return response.data.data.data;
    } catch (error) {
      console.error(`Error fetching order with id ${id}:`, error);
      throw error;
    }
  }

  // Create a new order
  public async createOrder(orderData: Partial<Order>): Promise<Order> {
    try {
      const response: AxiosResponse<{ data: { data: Order } }> =
        await this.api.post("/", orderData);
      return response.data.data.data;
    } catch (error) {
      console.error("Error creating order:", error);
      throw error;
    }
  }

  // Update an existing order by ID
  public async updateOrder(
    id: string,
    updatedData: Partial<Order>,
  ): Promise<Order> {
    try {
      const response: AxiosResponse<Order> = await this.api.patch(
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
  public async deleteOrder(id: string): Promise<void> {
    try {
      await this.api.delete(`/${id}`);
    } catch (error) {
      console.error(`Error deleting order with id ${id}:`, error);
      throw error;
    }
  }
}

const order = new OrderService();

export { order };
