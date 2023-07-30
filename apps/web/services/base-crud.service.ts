export class BaseCrudService {
  private baseUrl: string = 'http://localhost:3000';
  constructor() {}

  public get(): string {
    return 'BaseCrudService';
  }

  public async post<ResBody>(path: string, body: any, options?: any) {
    const res = await fetch(`${this.baseUrl}/${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (res.ok) {
      return (await res.json()) as ResBody;
    } else {
      const json = await res.json();
      throw new Error(json.message)
    }
  }
}
