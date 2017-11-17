[
  {
    'repeat(30, 30)': {
      uid: '',
      type: '',
      isAllocated: '{{bool()}}',
      salary: '{{floating(1000, 4000, 2, "$0,0.00")}}',
      picture: 'http://placehold.it/32x32',
      age: '{{integer(20, 40)}}',
      name: {
        first: '{{firstName()}}',
        last: '{{surname()}}'
      },
      email: function (tags) {
        return (this.name.first + '.' + this.name.last + '@' + this.company + tags.domainZone()).toLowerCase();
      },
      phone: '+1 {{phone()}}',
      address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
      about: '{{lorem(1, "paragraphs")}}',
      registered: '{{moment(this.date(new Date(2014, 0, 1), new Date())).format("LLLL")}}'
    }
  }
]