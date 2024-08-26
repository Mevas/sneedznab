import { ICache } from "#interfaces/index";
import { LRUCache } from "lru-cache";

export class SimpleCache implements ICache {
  readonly name: string;
  private cache: LRUCache<string, any>;
  constructor(private ttl: number) {
    this.name = "SimpleCache";
    this.cache = new LRUCache({ max: 250, ttl: this.ttl });
  }

  public async set(key: string, value: any): Promise<void> {
    this.cache.set(key, value);
    return;
  }

  public async get(key: string): Promise<any> {
    return this.cache.get(key);
  }
}
