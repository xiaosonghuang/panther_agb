export class AppSettings {
  public static get API_ENDPOINT(): string {
    return 'http://agbitics.biodb.sehir.edu.tr/api';
  }

  public static get NOTIFICATION_OPTIONS() {
    return { timeOut: 10000 };
  }
}
