import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Input } from "../ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { Separator } from "../ui/separator"

export function DemoShareDocument() {
  return (
    <Card>
      <CardContent>
        <div className="mb-5 flex space-x-4">
          <Input className="py-5" placeholder="Enter stake amount" />
          <Button>Stake</Button>
        </div>
        <Separator className="my-4" />
        <div className="flex space-x-2">
          <Input value="http://example.com/link/to/document" readOnly />
          <Button>Copy Link</Button>
        </div>
      </CardContent>
    </Card>
  )
}
