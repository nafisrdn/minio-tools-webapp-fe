class User {
  constructor({ id, accessKey, secretKey, policies, status, generateId = false }) {
    this.id = generateId ? this.generateId() : id;
    this.accessKey = accessKey;
    this.secretKey = secretKey;
    this.policies = policies;
    this.status = status;
  }

  getId = () => this.id;

  getAccessKey = () => this.accessKey;

  getSecretKey = () => this.secretKey;

  getPolicies = () => this.policies;

  getStatus = () => this.status;

  generateId = () => {
    this.id = Math.floor(Math.random() * 999999).toString();
  };
}

export default User;
