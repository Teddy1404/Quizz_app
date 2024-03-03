import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { redirect } from "next/navigation";
import HistoryCard from "./HistoryCard";
// import { prisma } from "@/lib/db";

type Props = {};

const RecentActivityCard = async (props: Props) => {
//   const session = await getAuthSession();
//   if (!session?.user) {
//     return redirect("/");
//   }
//   const games_count = await prisma.game.count({
//     where: {
//       userId: session.user.id,
//     },
//   });
  return (
    <Card className="col-span-4 lg:col-span-3">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          <Link href="/history">Recent Activity</Link>
        </CardTitle>
        <CardDescription>
          {/* You have played a total of {games_count} quizzes. */}
          you have played total of seven games
        </CardDescription>
      </CardHeader>
      <CardContent className="max-h-[580px] overflow-scroll">
        {/* <HistoryCard limit={10} userId={session.user.id} /> */}
        card content
      </CardContent>
    </Card>
  );
};

export default RecentActivityCard;