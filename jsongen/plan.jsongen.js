[
  {
    'repeat(15, 15)': {
      uid: '',
      employee: '',
      type: '',
      isApproved: '{{bool()}}',
      salary: '{{floating(1000, 4000, 2, "$0,0.00")}}',
      client: '{{company().toUpperCase()}}',
      details: '{{lorem(1, "paragraphs")}}',
      registered: '{{moment(this.date(new Date(2014, 0, 1), new Date())).format("LLLL")}}'
    }
  }
]