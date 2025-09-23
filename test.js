const obj = {
  a: 10,
  b: () => console.log(this.a),
  c() {
    console.log(this.a);
  },
};

obj.b();
obj.c();
