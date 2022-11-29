
// const domain = "http://localhost:3000"; 
const domain = "https://gdsc.mitaoeadmin.repl.co"
// const domain = "https://gdscmitaoe.herokuapp.com"

const getPastTeams = async ()=>{
    let teams = await (await fetch(`${domain}/api/team`)).json();
    let pastTeam = teams.pastTeams;
    let years = teams.years;
    // inserting teams year wise
    let tempDOM = '';
    let memberDOMs = []; 
    for(let i = 0;i < years.length;i++){
        let temp = `
        <header class="text-center section-header mt-5">
        <h2 class="section-title">Past Team - ${years[i]}</h2>
        </header>
        <div class="container-fluid mt-5">
        <div class="row" id="team_${years[i]}">
            <!-- Team members to be inserted here  -->
        
            
        </div>
        </div>
        `
        tempDOM += temp;
        let memberDOM = "";
        for(let j = 0;j <pastTeam.length;j++){
            if(pastTeam[j].year == years[i]){
                let memberCard = `
    <div class="col-md-4 col-15">
    <div class="card event-card">
        <div class="card hovercard">
            <div class="cardheader">
    
            </div>
            <div class="avatar">
                <img alt="" src="${domain}/images/teams/${pastTeam[j].img}"
                    alt="content avatar" width="150" height="50">
            </div>
            <div class="info">
                <div class="title">
                    <h5><b>${pastTeam[j].name}</b></h5>
                    <p>${pastTeam[j].designation}</p>
                </div>
                <div class="desc">${pastTeam[j].desc} </div>
            </div>
            <div class="bottom">
                <ul class="social-list__inline mt-10">
                    <li>
                        <a href="${pastTeam[j].social.twitter}" target="_blank" rel="noopener">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="${pastTeam[j].social.instagram}" target="_blank" rel="noopener">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="${pastTeam[j].social.github}" target="_blank" rel="noopener">
                            <i class="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="${pastTeam[j].social.linkedin}" target="_blank" rel="noopener">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="${pastTeam[j].social.link}" target="_blank" rel="noopener">
                            <i class="fas fa-link"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </div>
    `;
                memberDOM += memberCard;
            }
        }
        memberDOMs.push(memberDOM);
    }
    document.getElementById('past_team').innerHTML  = tempDOM;
    for(let i =0;i <years.length;i++){
        document.getElementById("team_"+years[i]).innerHTML = memberDOMs[i];
    }

}
getPastTeams();