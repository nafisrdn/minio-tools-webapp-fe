class User {
  constructor({ id, accessKey, secretKey, policies, status }) {
    this.id = id;
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
}

export default User;
