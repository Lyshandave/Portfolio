// Simple key-value store implementation for LYSHANDAVE Portfolio
// This handles basic data storage operations

export interface KVStore {
  get(key: string): Promise<any>;
  set(key: string, value: any): Promise<void>;
  delete(key: string): Promise<void>;
  list(): Promise<string[]>;
}

class MemoryKVStore implements KVStore {
  private store = new Map<string, any>();

  async get(key: string): Promise<any> {
    return this.store.get(key);
  }

  async set(key: string, value: any): Promise<void> {
    this.store.set(key, value);
  }

  async delete(key: string): Promise<void> {
    this.store.delete(key);
  }

  async list(): Promise<string[]> {
    return Array.from(this.store.keys());
  }
}

// Export a single instance
export const kvStore = new MemoryKVStore();

// Utility functions for common operations
export async function savePortfolioData(section: string, data: any): Promise<void> {
  await kvStore.set(`portfolio_${section}`, {
    ...data,
    lastUpdated: new Date().toISOString()
  });
}

export async function getPortfolioData(section: string): Promise<any> {
  return await kvStore.get(`portfolio_${section}`);
}

export async function logVisitor(visitorData: any): Promise<void> {
  const visitors = await kvStore.get('visitors') || [];
  visitors.push({
    ...visitorData,
    timestamp: new Date().toISOString()
  });
  await kvStore.set('visitors', visitors);
}

export async function getVisitorStats(): Promise<any> {
  const visitors = await kvStore.get('visitors') || [];
  return {
    totalVisits: visitors.length,
    recentVisits: visitors.slice(-10), // Last 10 visits
    lastVisit: visitors[visitors.length - 1]
  };
}