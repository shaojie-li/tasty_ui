import micromatch from "micromatch";

// 如果要调试代码，可以执行 npx lint-staged --debug
export default {
    "*": files => {
        // 只对src目录下的ts和tsx文件进行eslint检查和prettier格式化
        const match = micromatch(files, ["**/src/**/*.{ts,tsx}", "!**/*.test.{ts,tsx,js,jsx}", "!**/*.spec.{ts,tsx,js,jsx}"]);
        if (match.length === 0) return [];
        return [`eslint ${match.join(' ')} --report-unused-disable-directives --max-warnings 0`, `prettier --config --list-different --write ${match.join(' ')}`];
    },
};
