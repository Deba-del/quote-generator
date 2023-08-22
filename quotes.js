// Error handling Quotes
const localQuotes = [
    {
        "text": "Men act out like they're horrified by marriage, but when they find the woman of their dreams, they love it.",
        "author": "Rachel Hunter",
        "tag": "marriage"
        },
        {
        "text": "Marriage may often be a stormy lake, but celibacy is almost always a muddy horse pond.",
        "author": "Thomas Love Peacock",
        "tag": "marriage"
        },
        {
        "text": "I feel strongly for gay marriage to be accepted.",
        "author": "Bernadette Peters",
        "tag": "marriage"
        },
        {
        "text": "Next month, I will celebrate my 30th anniversary of marriage with my beautiful bride, Vicki. Our marriage has been a blessing. I have gained even more respect for the institution over the past 3 decades and will defend it against attack.",
        "author": "Todd Tiahrt",
        "tag": "marriage"
        },
        {
        "text": "I listen to the people. That was a big reason for my life, maybe the main reason, I'm singing because I love it when people say to me, 'Thank you.' I thank them. It's a marriage.",
        "author": "Julio Iglesias",
        "tag": "marriage"
        },
        {
        "text": "I mean, for all of his faults and the troubles in his marriage, Bill Clinton is still married to a girl he met in the library 25 years ago at school. Can we say that about many of our other leaders today in America, including on the right wing?",
        "author": "Paul Begala",
        "tag": "marriage"
        },
        {
        "text": "Today, I will vote in support of the Marriage Protection Amendment. I shall do so because like President Bush, I strongly believe that marriage should be between a man and a woman.",
        "author": "Nick Lampson",
        "tag": "marriage"
        },
        {
        "text": "I am for gay marriage. Or same-sex marriage. I don't want to say it the wrong way. I think people are sensitive to it. I have been painted as being this right-wing zealot on choice. Nothing could be further from the truth.",
        "author": "Harold Ford",
        "tag": "marriage"
        },
        {
        "text": "Marriage is the grave or tomb of wit.",
        "author": "Margaret Cavendish",
        "tag": "marriage"
        },
        {
        "text": "Although we hardly see each other off the set, Joy and I get along well when we do. As far as the marriage between Nathan and Haley, I think they are young and will see the reality of the situation eventually.",
        "author": "James Lafferty",
        "tag": "marriage"
        },
        {
        "text": "The whole Haley-Nathan marriage deal was a pretty good twist huh? I hope we got all of you with it. That particular story line even suprised me when I read it, it's a good one and it'll provide for some good stories to come.",
        "author": "James Lafferty",
        "tag": "marriage"
        },
        {
        "text": "There are powerful emotions that bring two people together in wonderful harmony in a marriage. Satan knows this, and would tempt you to try these emotions outside of marriage. Do not stir emotions meant to be used only in marriage.",
        "author": "Richard G. Scott",
        "tag": "marriage"
        },
        {
        "text": "I think that every state in the union should recognize same-sex marriage.",
        "author": "Cass Sunstein",
        "tag": "marriage"
        },
        {
        "text": "We can practice tolerance while still holding true to cultural values that protect the institution of marriage as a union between only a man and a woman.",
        "author": "Ken Calvert",
        "tag": "marriage"
        },
        {
        "text": "I think there are some people in life who are not marriage material and Chris is one of them.",
        "author": "Sharon Gless",
        "tag": "marriage"
        },
        {
        "text": "It was not a healthy marriage for long time. It was never about another man, it was about what my and Dennis's relationship could not sustain.",
        "author": "Meg Ryan",
        "tag": "marriage"
        },
        {
        "text": "I'm the only man in the world with a marriage licence made out to whom it may concern.",
        "author": "Mickey Rooney",
        "tag": "marriage"
        },
        {
        "text": "I used to have a theory actually that, if you've had a good childhood, a good marriage and a little bit of money in the bank, you're going to make a lousy comedian.",
        "author": "David Steinberg",
        "tag": "marriage"
        },
        {
        "text": "Stability is why society has an interest in marriage.",
        "author": "Gene Robinson",
        "tag": "marriage"
        },
        {
        "text": "The state's interest in marriage is stability. Generally speaking, polygamy does not work for stability. Inherent in the whole polygamous movement is a deep and abiding misogyny and denigration of women. So polygamy is objectionable on lots of grounds.",
        "author": "Gene Robinson",
        "tag": "marriage"
        },
        {
        "text": "College is a place to keep warm between high school and an early marriage.",
        "author": "George Gobel",
        "tag": "marriage"
        },
        {
        "text": "Instead, I think over the years we have cut the strength of marriage and relationships by the law and weakened the institution. We have tried to deal with relationships with no-fault divorce, with child custody, with so many other avenues and it has not helped.",
        "author": "Timothy Murphy",
        "tag": "marriage"
        },
        {
        "text": "Culture and tradition have to change little by little. So 'new' means a little twist, a marriage of Japanese technique with French ingredients. My technique. Indian food, Korean food I put Italian mozzarella cheese with sashimi. I don't think 'new new new.' I'm not a genius. A little twist.",
        "author": "Masaharu Morimoto",
        "tag": "marriage"
        },
        {
        "text": "But to sustain a marriage for 50 years, you have to get real a little bit and find someone who is understanding and who you can grow with. My mom always says, 'Marry the man who loves you a millimeter more.'",
        "author": "Ali Larter",
        "tag": "marriage"
        },
        {
        "text": "The most important thing for a good marriage is to learn how to argue peaceably.",
        "author": "Anita Ekberg",
        "tag": "marriage"
        },
        {
        "text": "Mama and Daddy King represent the best in manhood and womanhood, the best in a marriage, the kind of people we are trying to become.",
        "author": "Coretta Scott King",
        "tag": "marriage"
        },
        {
        "text": "I'm a little skeptical about using the Constitution this way, but I also believe marriage is between a man and a woman and that the courts shouldn't legislate this matter.",
        "author": "Pete Coors",
        "tag": "marriage"
        },
        {
        "text": "You're not just going out there, maybe sacrificing your own life. There's also sacrifices still going on at home. You can serve in the military and have a good marriage, but you just need to be aware of it so you can take those steps to take care of it.",
        "author": "Chris Kyle",
        "tag": "marriage"
        },
        {
        "text": "I'd love to have children, and I think marriage is great, I really do.",
        "author": "Jennifer Jason Leigh",
        "tag": "marriage"
        },
        {
        "text": "It's very trying on a marriage when you're doing a one hour show, week after week after week. You don't have enough time for people that maybe you should have top priority.",
        "author": "Gavin MacLeod",
        "tag": "marriage"
        },
        {
        "text": "To us marriage is first, everything else is second.",
        "author": "Julie Benz",
        "tag": "marriage"
        },
        {
        "text": "I do not believe that defending traditional marriage between one man and one woman excludes anybody or usurps anybody's civil rights and denies anybody their civil rights.",
        "author": "Alan Autry",
        "tag": "marriage"
        },
        {
        "text": "If you leave your wife and you don't ever contact her again, that says something about how you felt about the marriage.",
        "author": "H. G. Bissinger",
        "tag": "marriage"
        },
        {
        "text": "I found marriage somewhat stifling. I don't know that I am the kind of man who ought to be married.",
        "author": "Burt Lancaster",
        "tag": "marriage"
        },
        {
        "text": "What we need are not prohibitory marriage laws, but a reformed society, an educated public opinion which will teach individual duty in these matters.",
        "author": "Alfred Russel Wallace",
        "tag": "marriage"
        },
        {
        "text": "I know I'm guilty of and I think a lot of people are guilty of sort of getting starry-eyed with love and sort of looking over the bad things and keep going and you don't really prepare for how much work marriage really is.",
        "author": "John Krasinski",
        "tag": "marriage"
        },
        {
        "text": "That is why I fought against abortion and that is why if I were still in the Senate I would be doing everything I could to defend the sanctity of marriage.",
        "author": "Jesse Helms",
        "tag": "marriage"
        },
        {
        "text": "I'm knocking our pitiful, pathetic lawmakers. And I thank God that President Bush has stated, we need a Constitutional amendment that states that marriage is between a man and a woman.",
        "author": "Jimmy Swaggart",
        "tag": "marriage"
        },
        {
        "text": "I know in my own marriage I stayed in it to provide my son with what I thought was a stable background and to give him what I thought was the family life a child should have with two parents. But that isn't always the best way, and it took me taking my son to therapy after the divorce to really see it.",
        "author": "Regina King",
        "tag": "marriage"
        },
        {
        "text": "I think church and state should remain entirely separate at all costs, and that the decision of religious marriage should be of each faith to debate and decide free of political influence.",
        "author": "Adam Rickitt",
        "tag": "marriage"
        },
        {
        "text": "I have a wonderful marriage and two great kids.",
        "author": "Kelly Preston",
        "tag": "marriage"
        },
        {
        "text": "I did know Ted Hughes and I partly wrote the book to explain to myself and others the complexities of a marriage that was for six years wonderfully productive of poetry and then ended in tragedy.",
        "author": "Anne Stevenson",
        "tag": "marriage"
        },
        {
        "text": "I found it an interesting portrait of a marriage in exploring notions of how one partner supports the other, whilst not jeopardizing the greater good - which is the family.",
        "author": "Rachel Griffiths",
        "tag": "marriage"
        },
        {
        "text": "I know there are a lot of readers that think I've got a very crappy marriage just because of the things going on with Rick and Lori but there's really nothing that's been like a mirror. I'm just making this stuff up.",
        "author": "Robert Kirkman",
        "tag": "marriage"
        },
        {
        "text": "No Government has the moral authority to dismantle the universally understood meaning of marriage.",
        "author": "Keith O'Brien",
        "tag": "marriage"
        },
        {
        "text": "The church's teaching on marriage is unequivocal, it is uniquely, the union of a man and a woman and it is wrong that governments, politicians or parliaments should seek to alter or destroy that reality.",
        "author": "Keith O'Brien",
        "tag": "marriage"
        },
        {
        "text": "If marriage can be redefined so that it no longer means a man and a woman but two men or two women, why stop there? Why not allow three men or a woman and two men to constitute a marriage?",
        "author": "Keith O'Brien",
        "tag": "marriage"
        },
        {
        "text": "There is no doubt that, as a society, we have become blase about the importance of marriage as a stabilising influence and less inclined to prize it as a worthwhile institution.",
        "author": "Keith O'Brien",
        "tag": "marriage"
        },
        {
        "text": "Clearly, if it is sensible to hold a referendum on independence, it is crucial that we have one on marriage. It is the only way the country can move forward on this issue. Let all those who have a view on this subject place their trust in the Scottish people and let Scotland decide.",
        "author": "Keith O'Brien",
        "tag": "marriage"
        }
];