
# var permute = function(nums) {
#   let solutions = [];

#   const recurse = (current, used) => {
#     if(current.length === nums.length) {
#       solutions.push(current); // if we have a full solution push it to the res array and move on
#     } else {
#       for(let i = 0; i < nums.length; i++) {
#         if(used.indexOf(i) === -1) { // Check if we have used the idex already
#           recurse((current + (nums[i])), used + i); // add it to current
#         }
#       }
#     }
#   }
#   recurse('', '');
#   return solutions;
# };

# console.log(permute([1,2,3]))

class permutes(object):
    def permute(nums):
        # for id1, num in enumerate(nums):
        #   for id2, num2 in enumerate(nums):
        #     if num + num2 == target and id1 != id2:
        #       return [id1, id2]
        solutions = []
        def recurse(current, used):
          # print(len(current), len(nums))
          if len(current) == len(nums):
            solutions.append(current)
          else:
            for num in nums:
              num = str(num)
              if used.find(num) == -1:
                recurse((current + num), (used + num))
        recurse('', '')
        return solutions

    print(permute([1,2,3]))