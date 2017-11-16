[
  {
    'repeat(5, 10)': {
      plan: '{{guid()}}',
      isApproved: '{{bool()}}',
      approvalDate: '{{moment(this.date(new Date(2014, 0, 1), new Date())).format("LLLL")}}'
    }
  }
]