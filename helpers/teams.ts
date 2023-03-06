import Team from "../models/team";

export function getTeamByNumber(teamNumber: string) {
    return Team.findOne({ teamNumber });
}

export async function teamExistsByNumber(teamNumber: string) {
    return (await getTeamByNumber(teamNumber)) != null;
}

export async function getAccessToken(teamNumber: string): Promise<string> {
    const team = (await getTeamByNumber(teamNumber)) as any;
    return team.accessToken;
}
