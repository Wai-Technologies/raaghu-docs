﻿using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Guids;
using Volo.Abp.Settings;

namespace Volo.Abp.SettingManagement;

public class SettingTestDataBuilder : ITransientDependency
{
    private readonly ISettingRepository _settingRepository;
    private readonly IGuidGenerator _guidGenerator;
    private readonly SettingTestData _testData;

    public SettingTestDataBuilder(
        ISettingRepository settingRepository,
        IGuidGenerator guidGenerator,
        SettingTestData testData)
    {
        _settingRepository = settingRepository;
        _guidGenerator = guidGenerator;
        _testData = testData;
    }

    public async Task BuildAsync()
    {
        await _settingRepository.InsertAsync(
            new Setting(
                _testData.SettingId,
                "MySetting1",
                "42",
                GlobalSettingValueProvider.ProviderName
            )
        );

        await _settingRepository.InsertAsync(
            new Setting(
                _guidGenerator.Create(),
                "MySetting2",
                "default-store-value",
                GlobalSettingValueProvider.ProviderName
            )
        );

        await _settingRepository.InsertAsync(
            new Setting(
                _guidGenerator.Create(),
                "MySetting2",
                "user1-store-value",
                UserSettingValueProvider.ProviderName,
                _testData.User1Id.ToString()
            )
        );

        await _settingRepository.InsertAsync(
            new Setting(
                _guidGenerator.Create(),
                "MySetting2",
                "user2-store-value",
                UserSettingValueProvider.ProviderName,
                _testData.User2Id.ToString()
            )
        );

        await _settingRepository.InsertAsync(
            new Setting(
                _guidGenerator.Create(),
                "MySettingWithoutInherit",
                "default-store-value",
                GlobalSettingValueProvider.ProviderName
            )
        );

        await _settingRepository.InsertAsync(
            new Setting(
                _guidGenerator.Create(),
                "MySettingWithoutInherit",
                "user1-store-value",
                UserSettingValueProvider.ProviderName,
                _testData.User1Id.ToString()
            )
        );
    }
}
