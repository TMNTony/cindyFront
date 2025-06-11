import {createStore as _createStore} from 'vuex';
import axios from "axios";

export function createStore() {
    return _createStore({
        state: {
            gallery: [
                {
                    id: 1,
                    pictureURL: "hso.jpg",
                    caption: "Huntsville Symphony Orchestra horn section\n" +
                        "After a performance of Schumann’s Konzertstück, January 2019"
                },
                {
                    id: 2,
                    pictureURL: "tso.jpg",
                    caption: "Tuscaloosa Symphony Orchestra horn section \n" +
                        "Cynthia Chambless, Horn 3"
                },
                {
                    id: 3,
                    pictureURL: "TSO-horns.jpg",
                    caption: "Tuscaloosa Symphony Orchestra horns with the University of Alabama Huxford Symphony Orchestra performing Schumann’s Konzertstück Fall 2015"
                },
                {
                    id: 4,
                    pictureURL: "sw.jpg",
                    caption: "Huntsville Symphony Orchestra\n" +
                        "John Williams concert "
                },
                {
                    id: 5,
                    pictureURL: "skip.jpg",
                    caption: "Cynthia Chambless and Charles ‘Skip’ Snead"
                },
                {
                    id: 6,
                    pictureURL: "marty.jpg",
                    caption: "Cynthia Chambless and Martin ‘Marty’ Hackleman "
                },
            ],
            videos: [
                {
                    id: 1,
                    videoURL: 'https://www.youtube.com/embed/jhkytzoQpW4?si=TcDsrE2FUf5MVp3p',
                    caption: ""
                },
                {
                    id: 2,
                    videoURL: 'https://www.youtube.com/embed/3CyVaBWBFVA?si=JQcWX1-x8xqno2Ps',
                    caption: ""
                }
            ],

            schools: [
                {
                    name: "Berry Middle School",
                    pictureURL: "berry.png"
                },
                {
                    name: "Bumpus Middle School",
                    pictureURL: "bumpus.png"
                },
                {
                    name: "Hoover High School",
                    pictureURL: "hhs.png"
                },
                {
                    name: "James Clemons High School",
                    pictureURL: "jchs.png"
                },
                {
                    name: "Montevallo Middle School",
                    pictureURL: "mms.png"
                },
                {
                    name: "Northridge High School",
                    pictureURL: "nrhs.png"
                },
                {
                    name: "Pizitz Middle School",
                    pictureURL: "pizitz.png"
                },
                {
                    name: "Simmons Middle School",
                    pictureURL: "simmons.png"
                },
                {
                    name: "Thompson High School",
                    pictureURL: "ths.png"
                },
                {
                    name: "Thompson Middle School",
                    pictureURL: "tms.png"
                },
                {
                    name: "Spain Park High School",
                    pictureURL: "sp.png"
                },
                {
                    name: "Vestavia Hills School",
                    pictureURL: "vh.png"
                }
            ],
            profile: {
                fullBio: `
        <p class="pt-6 font-body leading-relaxed text-grey-20">
            Alabama native, Cynthia Simpson Chambless, is a highly sought-after horn teacher and performer.
            She is currently holding positions as 4th horn of the Huntsville (AL) Symphony Orchestra and 3rd horn
            of the Tuscaloosa (AL) Symphony Orchestra. In addition to being a freelance performer across the southeast,
            she has performed as 2nd horn of the Starkville (MS) Symphony Orchestra, and as a substitute musician with
            the Alabama Symphony Orchestra, the Kansas City Symphony, the South Dakota Symphony, and Chamber Music
            Amarillo (TX).
        </p>
        <p class="pt-6 font-body leading-relaxed text-grey-20">
            Her honors include second prize at the 2015 International Horn Competition of America Collegiate Division,
            2015-2016 semi-finalist for the New World Symphony, and 2010/2011 participant at the Round Top Festival
            Institute. She has also won numerous awards at International Horn Society regional competitions in the
            southeast and Midwest.
        </p>
        <p class="pt-6 font-body leading-relaxed text-grey-20">
            Cynthia maintains a full studio of private lesson students across the Birmingham metro area. Her students
            consistently rank in Alabama All State band, Alabama All-State Orchestra, Alabama All-State Solo Festival,
            and All-District bands. She teaches private lessons and sectionals for 10 schools and sees over 100 horn
            students each month.
        </p>
        <p class="pt-6 font-body leading-relaxed text-grey-20">
            Chambless received a B.M. and M.M. from the University of Alabama under the tutelage of Charles “Skip”
            Snead. While at UA, she taught lessons to undergraduate horn students and was a graduate teaching assistant
            in the music theory department. She also received a Performer’s Certificate from the University of
            Missouri-Kansas City, studying with Martin Hackleman.
        </p>
    `,
                achievements: `
        <p class="pt-6 font-body leading-relaxed text-grey-20">
            Students under Cynthia’s mentorship have accomplished a number of impressive musical feats. Students attend
            a number of university-hosted honor bands throughout Alabama, score superior ratings at Solo and Ensemble,
            and attend university-hosted summer camps. Listed below are the highest honors received at the state and
            national level:
        </p>
        <ul class="pt-6 font-body leading-relaxed text-grey-20">
            <li>Alabama All-State Solo Festival Top 10 Finalist 2023</li>
            <li>1st Chair Alabama All-State Red Band 2016, 2022, 2023</li>
            <li>1st Chair Alabama All-State Festival Orchestra 2022, 2023</li>
            <li>District V Red Band 2016, 2018, 2019, 2022, 2023</li>
            <li>District IV Red Band 2022, 2023</li>
            <li>District IV MS All-State Band 2018, 2021, 2022, 2023</li>
            <li>District IV MS Honor Band 2018, 2019, 2020, 2021, 2022, 2023</li>
        </ul>
        <p class="pt-6 font-body leading-relaxed text-grey-20">
            Students from the Chambless horn studio have received music scholarships at a number of Universities. These
            scholarships are awarded to students ranging from Music Majors to Music Minors to participants in
            marching/concert ensembles majoring in another field. Their music scholarships allow them to pursue their
            dreams, get paid to do something they love, and make new friends.
        </p>
        <ul class="pt-6 font-body leading-relaxed text-grey-20">
            <li>University of Alabama</li>
            <li>Auburn University</li>
            <li>University of Alabama at Birmingham</li>
            <li>Jacksonville State University</li>
            <li>Samford University</li>
            <li>University of Montevallo</li>
            <li>Oglethorpe University</li>
        </ul>
    `,

            },
            about: {
                shortBio: "Cynthia Simpson Chambless is a professional horn player and highly sought after teacher in the Birmingham area. She plays on a Stephens Custom double horn, a Yamaha 667 double horn, and an Osmun Chicago 14 cup with an L6 gold rim. You can hear her perform with the Tuscaloosa and Huntsville Symphony orchestras. Her repairman/horn guru is James Baker with Custom Brass.",
                mission: "Cynthia believes that all lessons learned in music can be applied to a student’s future life and career. Setting goals, attention to detail, and confidence will benefit all paths in adulthood. Students receive a hand tailored practice plan each lesson to help them achieve success at an individual level and represent their school proudly at honor bands, solo festivals, and summer camps. Chambless also works with horn sections on team work, group listening, and uplifting others. Students in the Chambless horn studio are often in her program for many years and build a sense of trust in the process. All students can benefit from a hybrid approach of private and group instruction that will teach them lifelong lessons."
            },
            posts:
                [
                //     each post will have title, description, date, content, and an id
                ],
            bells: `
<p class="font-body leading-relaxed" style="font-family: 'trebuchet ms', geneva, sans-serif;">
    Bell's palsy is a medical condition that causes sudden, temporary weakness or paralysis of the muscles on one side of the face. 
        It occurs when the facial nerve, which controls the muscles of the face, becomes inflamed. The exact cause of Bell's palsy is not 
        well understood, but it is thought to be related to viral infections, especially the herpes simplex virus.
    </span>
</p>
<p>&nbsp;</p>
<p>
    <span style="font-family: 'trebuchet ms', geneva, sans-serif;">
        Common symptoms of Bell's palsy include:
    </span>
</p>
<ul>
    <li><span style="font-family: 'trebuchet ms', geneva, sans-serif;">Sudden weakness or paralysis on one side of the face, typically affecting the eye, mouth, and facial expressions.</span></li>
    <li><span style="font-family: 'trebuchet ms', geneva, sans-serif;">Drooping of the mouth and difficulty in closing the eye on the affected side.</span></li>
    <li><span style="font-family: 'trebuchet ms', geneva, sans-serif;">Loss of the sense of taste on the front two-thirds of the tongue.</span></li>
    <li><span style="font-family: 'trebuchet ms', geneva, sans-serif;">Increased sensitivity to sound in one ear.</span></li>
    <li><span style="font-family: 'trebuchet ms', geneva, sans-serif;">Altered tear and saliva production, which may lead to dry eye or excessive tearing.</span></li>
</ul>
<p>&nbsp;</p>
<p>
    <span style="font-family: 'trebuchet ms', geneva, sans-serif;">
        The onset of Bell's palsy is typically rapid, and symptoms can be quite alarming. Most people with Bell's palsy gradually recover 
        over a period of several weeks to months. However, the extent of recovery varies from person to person, and some individuals may 
        have residual weakness or other long-term complications.
    </span>
</p>
<p>&nbsp;</p>
<p>
    <span style="font-family: 'trebuchet ms', geneva, sans-serif;">
        Treatment for Bell's palsy may involve medications, such as corticosteroids to reduce inflammation, and sometimes antiviral drugs. 
        Physical therapy and other supportive measures may also be recommended to help with recovery and manage symptoms. In some cases, 
        surgery may be considered to correct facial muscle issues that persist after recovery.
    </span>
</p>
<p>&nbsp;</p>
<p>
    <span style="font-family: 'trebuchet ms', geneva, sans-serif;">
        It's important to seek medical attention if you suspect you have Bell's palsy, as it could be a sign of other medical conditions 
        that may need different treatments. A healthcare professional can provide an accurate diagnosis and guidance on appropriate management.
    </span>
</p>
</p>
`
        },
        mutations: {
        },
        getters: {
            getSchools(state) {
                return state.schools;
            },
            getImages(state) {
                return state.gallery;
            },
            getVideos(state) {
                return state.videos;
            },
            getProfile(state){
                return state.profile
            },
            getPosts(state){
                return state.posts
            },
            getPost: (state) => (id) => {
                return state.posts.find(post => post.id === id)
            },
            getAbout(state){
                return state.about
            },
            getBellsContent(state){
                return state.bells
            }
        },
    });
}
