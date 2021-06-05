module.exports = class Counting {
  counting() {}

  fc(n) {
    const f = [];
    function ftr(n) {
      if (n == 0 || n == 1) return 1;
      if (f[n] > 0) return f[n];
      return (f[n] = ftr(n - 1) * n);
    }
    return ftr(n);
  }

  nPr(n, r) {
    return this.fc(n) / this.fc(n - r);
  }

  nCr(n, r) {
    return this.fc(n) / (this.fc(n - r) * this.fc(r));
  }
};
