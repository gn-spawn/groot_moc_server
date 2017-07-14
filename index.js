module.exports = () => {
  const data = {
    users: [],
    tags: [
      {
        id: 1,
        name: "ポケモン",
      },

      {
        id: 2,
        name: "映画"
      },
      {
        id: 3,
        name: "スポーツ"
      }
    ]
  };
  // userを100個作る
  for (let i = 0; i < 100; i++) {
    data.users.push({
      id: `${i + 1}`,
      user_id: "8a32cbd6-" + `${i}`,
      user_name: "tehu" + `${i}`,
      tags: [{
          id: 1,
          name: 'ポケモン',
        },
        {
          id: 2,
          name: '映画',
        },
        // {
        //   id: 3,
        //   name: 'スポーツ'
        // }
      ],
      twitter_token: "tehutehuapple_key" + `${i}`,
      twitter_token_secret: "tehutehuapple_secret" + `${i}`,
      twitter_icon_url: "https://pbs.twimg.com/media/C8Qy-EtVwAEZqq6.jpg",
      other_account_urls: null,
      created_at: "2017-07-03T15:41:08.423Z",
      updated_at: "2017-07-03T15:41:08.423Z"
    });
  }
  return data;
};
