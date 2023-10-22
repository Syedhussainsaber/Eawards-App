export default async function handler(req, res) {

const data  = {   "panIndia":{
      "title":"Pan India",
      "actors":[{
        "img":"https://image.tmdb.org/t/p/w500/d8jQehnCiGuLhZbs1DyB2uDu5BA.jpg",
        "name":"Sharukh Khan",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/es8St0vl9otL1XAAZJKYmNpL3Wy.jpg",
        "name":"Yash",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/5fFpyv9CoSezaWSBneO5YoKb5tu.jpg",
        "name":"N.T. Rama Rao Jr.",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/6naZ3oybdCtfggc5pTrcBDxOXrP.jpg",
        "name":"Prabhas",
        "website":""
      },
      {
        "img":"https://image.tmdb.org/t/p/w500/mNQA0qYtLeemo7mljd9RlG9jUMR.jpg",
        "name":"Ram Charan",
        "website":""
      }],
      "directors":[{
        "img":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/g7jXGAVT8T5vq81fO5JWDleDc75.jpg",
        "name":"S. S. Rajamouli",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/oq6ydaurgC4NueXuo64R5QoFnfp.jpg",
        "name":"Prashanth Neel",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/xwpN5swbmjmlaN0B8Eac5jyN4JQ.jpg",
        "name":"RajKumar Hirani",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/aQ1TFMLCvemgbfH5BkIwfg20mf4.jpg",
        "name":"Sanjay Leela Bansali",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/fAb4GhSdmrYPnI5Pfmp4N9itUCa.jpg",
        "name":"Anurag Kashyap",
        "website":""
      }],
      "actresses":[{
        "img":"https://image.tmdb.org/t/p/w500/t09lf8vem5MRk3KaALcdgehreXg.jpg",
        "name":"Pooja Hegde",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/sXgEh0z6NzyvmEeBeLPK1ON7NBY.jpg",
        "name":"Deepika Padukone",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/RBnTJPegPFLBS4VPsNLbf6iAoD.jpg",
        "name":"Alia Bhatt",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/t4WYoKiFAyO1Rhjv7O03EKmJHp4.jpg",
        "name":"Tamannaah Bhatia",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/iGQ0AT1bNULlrJwSOGSRqLDSfGG.jpg",
        "name":"Samantha Ruth Prabhu",
        "website":""
      }]
    },
  
    "tollywood":{
  "title":"Tollywood",
  "actors":[{
    "img":"https://image.tmdb.org/t/p/w500/6naZ3oybdCtfggc5pTrcBDxOXrP.jpg",
    "name":"Prabhas",
    "website":""
  },{
    "img":"https://image.tmdb.org/t/p/w500/6iruxCS4CsOpzAxgfl2ikCEYWCo.jpg",
    "name":"Mahesh Babu",
    "website":""
  },{
    "img":"https://image.tmdb.org/t/p/w500/gAoo56sKx2u4jp3rtDiNeflBJAR.jpg",
    "name":"Allu Arjun",
    "website":""
  },{
    "img":"https://image.tmdb.org/t/p/w500/5fFpyv9CoSezaWSBneO5YoKb5tu.jpg",
    "name":"N.T. Rama Rao Jr.",
    "website":""
  },
  {
    "img":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/mNQA0qYtLeemo7mljd9RlG9jUMR.jpg",
    "name":"Ram Charan",
    "website":""
  }],
  "directors":[
    {
      "img":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/g7jXGAVT8T5vq81fO5JWDleDc75.jpg",
      "name":"S. S. Rajamouli",
      "website":""
    },{
    "img":"https://image.tmdb.org/t/p/w500/xPOjxS9r0rdLPbP14lHi27qwlTU.jpg",
    "name":"Puri Jagannadh",
    "website":""
  },{
    "img":"https://image.tmdb.org/t/p/w500/jUnBwmEjf82UxUDQpJI0CwscfHC.jpg",
    "name":"Sukumar",
    "website":""
  },{
    "img":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/8gqFXnsGtBKJMhOwEtR8wlm6GoF.jpg",
    "name":"Trivikram Srinivas",
    "website":""
  },{
    "img":"https://image.tmdb.org/t/p/w500/p5dF5h55ktmsJrCNxsv75LqALpa.jpg",
    "name":"Sekhar Kammula",
    "website":""
  }],
  "actresses":[{
    "img":"https://image.tmdb.org/t/p/w500/iGQ0AT1bNULlrJwSOGSRqLDSfGG.jpg",
    "name":"Samantha Ruth Prabhu",
    "website":""
  },{
    "img":"https://image.tmdb.org/t/p/w500/zpe6Es8kdNOXuPdXiJvqxzsmN6z.jpg",
    "name":"Anushka Shetty",
    "website":""
  },{
    "img":"https://image.tmdb.org/t/p/w500/wDzYjnDRNzyigCPBEwc9gf1hZ0Q.jpg",
    "name":"Kajal Aggarwal",
    "website":""
  },{
    "img":"https://image.tmdb.org/t/p/w500/fMotpuQYUfyPPWeRJk8C8ADBZrY.jpg",
    "name":"Rashmika Mandanna",
    "website":""
  },{
    "img":"https://image.tmdb.org/t/p/w500/t4WYoKiFAyO1Rhjv7O03EKmJHp4.jpg",
    "name":"Tamannaah Bhatia",
    "website":""
  }]
    },
    "bollywood":{
      "title":"Bollywood",
      "actors":[ {
        "img":"https://image.tmdb.org/t/p/w500/d8jQehnCiGuLhZbs1DyB2uDu5BA.jpg",
        "name":"Sharukh Khan",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/gxKwCCcs777HzsXRpdGsBV87pXn.jpg",
        "name":"Salman Khan",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/ymYNHV9luwgyrw17NXHqbOWTQkg.jpg",
        "name":"Ranbir Kapoor",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/bI3yxh4FzKL2hHYS4nbzcDMWtZs.jpg",
        "name":"Amir Khan",
        "website":""
      },
      {
        "img":"https://image.tmdb.org/t/p/w500/upKrdABAMK7jZevWAoPYI24iKlR.jpg",
        "name":"Hrithik Roshan",
        "website":""
      }],
      "directors":[{
        "img":"https://image.tmdb.org/t/p/w500/zip1x7OXOBxXxcdYvKOgw6MnAWm.jpg",
        "name":"Karan Johar",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/aQ1TFMLCvemgbfH5BkIwfg20mf4.jpg",
        "name":"Sanjay Leela Bansali",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/xwpN5swbmjmlaN0B8Eac5jyN4JQ.jpg",
        "name":"RajKumar Hirani",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/ke8kvmtlSa67EYVo8a42US18ok2.jpg",
        "name":"Rohit Shetty",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/fAb4GhSdmrYPnI5Pfmp4N9itUCa.jpg",
        "name":"Anurag Kashyap",
        "website":""
      }],
      "actresses":[{
        "img":"https://image.tmdb.org/t/p/w500/sGxjQQ2ymrrplbRqFjwiJiUdc5w.jpg",
        "name":"Katrina Kaif",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/sXgEh0z6NzyvmEeBeLPK1ON7NBY.jpg",
        "name":"Deepika Padukone",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/RBnTJPegPFLBS4VPsNLbf6iAoD.jpg",
        "name":"Alia Bhatt",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/fPhX9mefBzco5ntQUZNJZG56Gbi.jpg",
        "name":"Anushka Sharma",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/oyyCVVGwx3xGomOAESsHxpJacBK.jpg",
        "name":"Kiara Advani",
        "website":""
      }]
    },
    "hollywood":{
      "title":"Hollywood",
      "actors":[{
        "img":"https://image.tmdb.org/t/p/w500/5sjLDtdwjuVdZNdrnbAwDQdn5W.jpg",
        "name":"Tom Cruise",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/5Brc5dLifH3UInk3wUaCuGXpCqy.jpg",
        "name":"Leonardo DiCaprio",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/xkHHiJXraaMFXgRYspN6KVrFn17.jpg",
        "name":"Chris Hemsworth",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/z4wuEcnTW4hlICMYPGn5W8bK2zh.jpg",
        "name":"Johnny Depp",
        "website":""
      },
      {
        "img":"https://image.tmdb.org/t/p/w500/im9SAqJPZKEbVZGmjXuLI4O7RvM.jpg",
        "name":"Robert Downey Jr.",
        "website":""
      }],
      "directors":[{
        "img":"https://image.tmdb.org/t/p/w500/z4wuEcnTW4hlICMYPGn5W8bK2zh.jpg",
        "name":"Christopher Nolan",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/z4wuEcnTW4hlICMYPGn5W8bK2zh.jpg",
        "name":"James Cameron",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/z4wuEcnTW4hlICMYPGn5W8bK2zh.jpg",
        "name":"Steven Spielberg",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/9U9Y5GQuWX3EZy39B8nkk4NY01S.jpg",
        "name":"Martin Scorsese",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/1gjcpAa99FAOWGnrUvHEXXsRs7o.jpg",
        "name":"Quentin Tarantino",
        "website":""
      }],
      "actresses":[{
        "img":"https://image.tmdb.org/t/p/w500/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg",
        "name":"Scarlett Johansson",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/mDKMsjOMytyBiy7MHNZTa7gp7wj.jpg",
        "name":"Jennifer Lawrence",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/k3W1XXddDOH2zibPkNotIh5amHo.jpg",
        "name":"Angelina Jolie",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/3UaYw9KF4fEXRMRWhf25aGJpAW2.jpg",
        "name":"Emma Stone",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/edPU5HxncLWa1YkgRPNkSd68ONG.jpg",
        "name":"Natalie Portman",
        "website":""
      }]
    },
    "sandalwood":{
      "title":"Sandalwood",
      "actors":[{
        "img":"https://image.tmdb.org/t/p/w500/es8St0vl9otL1XAAZJKYmNpL3Wy.jpg",
        "name":"Yash",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/aOQ6tjRLjMReW8Pig9PjJaudl5b.jpg",
        "name":"Shiva Rajkumar",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/hgmwQ1ivdV8yGiG4zFGap97yEgn.jpg",
        "name":"Puneeth Rajkumar",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/9kfjzl9jFDEU4ZE0KJfrZVg6mFC.jpg",
        "name":"Darshan Thoogudeepa",
        "website":""
      },
      {
        "img":"https://image.tmdb.org/t/p/w500/8c5TYgGwbkcQkvC3ZlTU41OfYBN.jpg",
        "name":"Sudeep",
        "website":""
      }],
      "directors":[{
        "img":"https://image.tmdb.org/t/p/w500/q5xr6PZjBdF39xnCxCI22GyWuHE.jpg",
        "name":"RB Shetty",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/lcxwf2cFMmO2JH1fGULGzfBprk.jpg",
        "name":"Upendra Roa",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/h0Ur2niouhlsqWoOFDyrgo7bUoJ.jpg",
        "name":"Yograj Bhatt",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/qrRMtgXlFVAZR5M3GBtN0eCC7I5.jpg",
        "name":"Shankar Nag",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/eCLvzUrFqewdlXreBipx82XBHyJ.jpg",
        "name":"S. R. Puttana Kanagal",
        "website":""
      }],
      "actresses":[{
        "img":"https://image.tmdb.org/t/p/w500/yYMsCColotfKj0pC4p1U9hjLOdv.jpg",
        "name":"Ruchita Ram",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/wzmnd0YpIKSLLa1bjRa7C3Tbww8.jpg",
        "name":"Ashika Ranganath",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/8ZRnmt0pnn2vdPJVK9UsWyakEF2.jpg",
        "name":"Shanvi Shrivastava",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/4wZzbKS1yzLttinSN5Ys7HgDftT.jpg",
        "name":"Aditi Prabhudeva",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/i7Fl9o5DeByYUlD0jFvNm9lub73.jpg",
        "name":"Shraddha Srinath",
        "website":""
      }]
    },
    "mollywood":{
      "title":"Mollywood",
      "actors":[{
        "img":"https://image.tmdb.org/t/p/w500/8AT3qDRakZQSZ6HVj7sQFUzN07N.jpg",
        "name":"Dulquer Salmaan",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/wvoBULQimwguAGPOHZ8TDoy7jBJ.jpg",
        "name":"Mohanlal",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/6W4nGeMkRWZ5Wj0HAAntu9FWP4f.jpg",
        "name":"Nivin Pauly",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/wmkwZWFHqMptqdt4HacMIAe8OBP.jpg",
        "name":"Fahadh Faasil",
        "website":""
      },
      {
        "img":"https://image.tmdb.org/t/p/w500/72ZaGOCFleKSa1QcHDImN2dOWSy.jpg",
        "name":"Mammootty",
        "website":""
      }],
      "directors":[{
        "img":"https://image.tmdb.org/t/p/w500/lKiBCAdp62stAWlHruJpjz7UC4d.jpg",
        "name":" Vineeth Sreenivasan",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/bizV6LQMKMCEAVzeIh5rEOty7av.jpg",
        "name":"Alphonse Puthren",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/mXCnvBbRynOYOE3aqGostSvCZ0N.jpg",
        "name":"Dileesh Pothan",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/47Hqs5fHKFU0uRb0qIJOncAcqNl.jpg",
        "name":"Jeethu Joseph",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/bzeQl6cLi0XwnXMynIRBwqeOjNn.jpg",
        "name":"Madhu C Narayanan",
        "website":""
      }],
      "actresses":[{
        "img":"https://image.tmdb.org/t/p/w500/8AwNhmjmJ3L7r4qXbv0vxSFLYD6.jpg",
        "name":"Parvathy Arun",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/eXTaWA5jp7kW7gupWt6bGCKE4DI.jpg",
        "name":"Nazriya Nazim",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/11tTCca9pl89XaPhaE2o8UQLUVr.jpg",
        "name":"Amala Paul",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/kR6Sjw23PLb3yRNopibCn6DkAta.jpg",
        "name":"Namitha Pramod",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/7u1WgUHnwIW9mtL6aTdo1cRXmCM.jpg",
        "name":"Manju Warrier",
        "website":""
      }]
    },
    "kollywood":{
      "title":"Kollywood",
      "actors":[{
        "img":"https://image.tmdb.org/t/p/w500/xnGKntkTDURY5mJ0sOVRI3VIDsY.jpg",
        "name":"Dhanush",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/cQBcrXqcQPfXOQfNfgO3slJM2xi.jpg",
        "name":"Rajinikanth",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/AqQG7k38ywY88treciT16147vOU.jpg",
        "name":"Suriya",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/iGveyp8DuSr3YHK7m6faOXTKrjN.jpg",
        "name":"Vijay",
        "website":""
      },
      {
        "img":"https://image.tmdb.org/t/p/w500/c171LQMyHtULZC0RmuIHiiFDOjv.jpg",
        "name":"Vikram",
        "website":""
      }],
      "directors":[{
        "img":"https://image.tmdb.org/t/p/w500/p9fL8NqPX6m5u9cFDo8suAlunaR.jpg",
        "name":"S. Shankar",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/anbOMr8XeoshB2wrqxaHl9PqWDH.jpg",
        "name":"Mani Ratnam",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/jKascsNlLyk5BaJbRFCEaRv7UiZ.jpg",
        "name":"K. Balachander",
"website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/7FGxsw7JD1jBiciqN7IGV1dAHW1.jpg",
        "name":"A.R. Murugadoss",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/qOFycWPpr3Hi4kVXKWnTTKCAnGk.jpg",
        "name":"Gautham Vasudev Menon",
        "website":""
      }],
      "actresses":[{
        "img":"https://image.tmdb.org/t/p/w500/5KubBeb2DkNXoU4lzzBdWzqzzlM.jpg",
        "name":"Nayanthara",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/mW8qNBnHhTFlNPA6hj01pNK35UV.jpg",
        "name":"Jyothika",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/sirse7oOd1ACEEQBVF4PHJHPUup.jpg",
        "name":"Trisha Krishnan",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/3xCuu8Wwj8TCCtYjVTiXt1nGTtn.jpg",
        "name":"Hansika Motwani",
        "website":""
      },{
        "img":"https://image.tmdb.org/t/p/w500/1zYJuSccSA45VVBdgozpRcL99Rd.jpg",
        "name":"Shruti Haasan",
        "website":""
      }]
    }
  }
  try {
    res.status(200).json(data)
  } catch (err) {
    res?.status(500).json({ error: 'failed to load data' })
  }
}