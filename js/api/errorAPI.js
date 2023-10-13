export class errorAPI {
  async fetchError() {
    const url = "https://www.mocky.io/v2/5dfcef48310000ee0ed2c281";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }

    return response.json();
  }
}
