export interface WebdavConfig {
  certssl: number;
  htauth: string;
  id: number;
  password: string;
  protocol: WebdavProtocol;
  tcpport: number;
  tcpportssl: number;
}

export type WebdavConfigUpdate = Omit<WebdavConfig, 'id'>;

export enum WebdavProtocol {
  Http = 'HTTP',
  Https = 'HTTPS',
  HttpHttps = 'HTTPHTTPS',
}
