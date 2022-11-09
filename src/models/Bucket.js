class Bucket {
  constructor(name, lastModified) {
    this.name = name;
    this.lastModified = lastModified;
  }

  getName() {
    return this.name;
  }

  getLastModified() {
    return this.lastModified;
  }
}

export default Bucket;
