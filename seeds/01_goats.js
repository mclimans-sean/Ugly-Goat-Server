
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('goats').del()
    .then(function() {
      // Inserts seed entries
      return knex('goats').insert([
        {
          title: 'My Mom Cuts My Hair',
          image_url: 'https://i.ytimg.com/vi/8_B2GqcjTxI/maxresdefault.jpg',
          rating: 8
        },
        {
          title: 'The Easily Offended Goat',
          image_url: 'https://pbs.twimg.com/media/B1z4obBCcAAVeh4.jpg',
          rating: 7
        },
        {
          title: 'Goat Loves to Sing, but Too Ugly for Mtv',
          image_url: 'http://cache.gawker.com/assets/images/4/2009/12/remainders-30-goat-5.jpg',
          rating: 4
        },
        {
          title: 'A Face Not Even a Mother Could Love',
          image_url: 'http://www.thompsoncoburn.com/images/default-source/blogs/patent-litigation-ugly-truths---patent-billy-goat_25961385336_o.jpg?sfvrsn=4',
          rating: 6
        },
      ]);
    });
};
