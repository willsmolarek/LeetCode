function twoSum(nums: number[], target: number): number[] {
    const papel = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const atual = nums[i];
        const complemento = target - atual;

        if (papel.has(complemento)) {
            return [papel.get(complemento)!, i];
        }
        papel.set(atual, i);
    }
    return [];
};