export class BaseCrudService {
  private baseUrl: string = 'http://localhost:3000';
  constructor() {}

protected  serialize (obj: any, prefix: any) {
  var str = [],
    p;
  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      var k = prefix ? prefix + "[" + p + "]" : p,
        v = obj[p];
      str.push((v !== null && typeof v === "object") ?
        this.serialize(v, k) :
        encodeURIComponent(k) + "=" + encodeURIComponent(v));
    }
  }
  return str.join("&");
}

  public async get<ResBody>(path: string, options?: any) {
    const url = options?.skipBaseUrl ? path : `${this.baseUrl}/${path}`
    const authHeader = options?.auth ? { Authorization: `Bearer ${localStorage.getItem('access_token')}` } : {}
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader as any
      },
    });
    if (res.ok) {
      return (await res.json()) as ResBody;
    } else {
      const json = await res.json();
      throw new Error(json.message)
    }
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
