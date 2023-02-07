class Perhitungan {
  constructor(data) {
    this.data = data;
  }
  hitungTotalUmur() {
    this.totalUmur = 0;
    for (let i = 0; i < data.length; i++) {
      this.totalUmur += Number(data[i].umur);
    }
  }
  hitungTotalUangSaku() {
    this.totalUangSaku = 0;
    for (let i = 0; i < data.length; i++) {
      this.totalUangSaku += Number(data[i].uangsaku);
    }
  }

  asyncHitungTotalUmur = (data) => {
    return new Promise((resolve, reject) => {
      this.totalUmur = 0;
      for (let i = 0; i < data.length; i++) {
        this.totalUmur += Number(data[i].umur);
      }
      resolve(this.totalUmur);
    });
  };
  asyncHitungTotalUangSaku = (data) => {
    return new Promise((resolve, reject) => {
      this.totalUangSaku = 0;
      for (let i = 0; i < data.length; i++) {
        this.totalUangSaku += Number(data[i].uangsaku);
      }
      console.log(this.totalUangSaku, "<<<<<<<<<<<<");
      resolve(this.totalUangSaku);
    });
  };
  hitungAll() {
    Promise.all([this.asyncHitungTotalUmur(this.data), this.asyncHitungTotalUangSaku(this.data)]).then((result) => {
      for (let cek of result) {
        console.log(cek);
      }
      console.log("done");
    });
  }
}

class Statis extends Perhitungan {
  constructor(data) {
    super(data);
  }
  outputData() {
    console.log("Total Umur " + this.totalUmur);
    console.log("TOtal UangSaku " + this.totalUangSaku);
  }
}
